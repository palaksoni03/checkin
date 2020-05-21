import axios from 'axios';
import {setUserProfile,authReducers} from '../actions/actions';
import configureStore from './store/configureStore';
import Auth from './Auth';
import GGUtils from './GGUtils';

const {store,persistor} = configureStore();

export const rawInstance = axios.create({
  withCredentials: true,
  headers: {
      Accept: 'application/json'
  }
});

export const ssoInstance = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});

// Add a request interceptor
ssoInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
ssoInstance.interceptors.response.use(async (response)=> {

      return response;

  },  async (error)=> {
      if(undefined !== error.response){

          if(401 === error.response.status) {
              await store.dispatch(setUserProfile(null));
              await store.dispatch(authReducers(false))
              Auth.login(true)
          }else if(424 === error.response.status) {
              const sources = error.response.data;
              GGUtils.userVerification(true,sources.error)
          }
      }

    return new Promise( (resolve, reject)=> {
        reject(error)
    })
});


export const autoInstance = axios.create({
    withCredentials: true,

});

// Add a request interceptor
autoInstance.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // Do something with request error
    return new Promise( (resolve, reject)=> {
        reject(error)
    })
});


export default ssoInstance;
