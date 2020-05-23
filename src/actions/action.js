import { AUTHORIZE,SET_USERDATA,SET_LOCATION,SET_DEPANDANCY_MODAL,NOTIFICATION_USER_TOKEN } from '../actions';

export const authReducers = (sources)=>{

  return {
    type:AUTHORIZE,
    isLoggedIn:sources
  };
}

export const setUserProfile = (userData)=>{

  return {
    type:SET_USERDATA,
    users:userData
  };
}

export const setHotelList = (hotelData)=>{

  return {
    type:SET_HOTEL_LIST,
    hotelList:hotelData
  };
}
