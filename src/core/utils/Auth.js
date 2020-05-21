import Config from '../Config';
import {ssoInstance, rawInstance} from './Axios';
import Notification from './Notification';
import {PureComponent} from './LoginModal';
import configureStore from './store/configureStore';
import {setUserProfile, authReducers} from '../actions/actions';

const {store, persistor} = configureStore();

async function setFreshUserProfileData() {
    let _this = this;

    await rawInstance.get(Config.ACCOUNT_API_URL + 'api/v1.0.2/user/profile')
        .then(async function (response) {
            const sources = response.data;
            let users = sources.data;
            await store.dispatch(setUserProfile(sources.data));
            await store.dispatch(authReducers(true))
            return true;
        }).catch(async function (e) {
            await store.dispatch(setUserProfile(null));
            await store.dispatch(authReducers(false))
            return false;
        });
}

export default class Auth {

    static isLoggedIn() {

        let state = store.getState();
        let status = null;
        if (state.auth.users === null) {
            status = false;
        }else{
          status = true;
        }

        return status;
    }

    // static async isLoggedInAsync() {
    //     let isLoggedIn = null;
    //
    //
    //     isLoggedIn = new Promise((async (resolve, reject) => {
    //                 let storeState = await store.getState();
    //                 resolve(storeState);
    //         }
    //     )).then((storeState)=>{
    //
    //       return storeState.auth.isLoggedIn;
    //     });
    //
    //     if(isLoggedIn===null){
    //         this.isLoggedInAsync();
    //     }
    //
    //     return isLoggedIn;
    //
    // }

    static async isLoggedInAsync() {

       const isLoggedIn = new Promise((async (resolve, reject) => {
                   let storeState = await store.getState();
                   resolve(storeState);
           }
       )).then((storeState)=>{

         let isLoggedIn = null;
         if (storeState.auth.users === null) {
             isLoggedIn = false;
         } else {
             isLoggedIn = true;
         }
         return isLoggedIn;
       })
       return isLoggedIn;

   }

    static user() {

        let state = store.getState();
        if (state.auth.users === null) {
            return {};
        } else {
            return state.auth.users;
        }
    }

    static async update() {

        return await setFreshUserProfileData();
    }

    static login(status) {
        PureComponent.create(status)
    }

    static logout(callback) {

        let obj = {
          notificationToken : localStorage.getItem('notification-token')
        }
        ssoInstance.post(Config.ACCOUNT_API_URL + 'v1.0.2/logout',obj)
            .then((response) => {
                const sources = response.data;
                callback(sources)
            })
            .catch((error) => {
                callback(false)
            });

    }

}
