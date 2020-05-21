import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import checkin from '../../reducers';

const persistConfig = {
    key: 'rootPkg',
    storage: storage,
    blacklist:['checkin']
  }

const persistedReducer = persistReducer(persistConfig, checkin);

export default () => {
    let store = createStore(
        persistedReducer,
        window.STATE_FROM_SERVER
    )
    let persistor = persistStore(store)
    return { store, persistor }
  }
