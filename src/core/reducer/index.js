import {combineReducers} from 'redux';
import Login from './login';
import HotelBooking from './HotelBooking';
import HotelDetail from './HotelDetail';
import HotelListing from './HotelListing';
import Register from './Register';
import RentalCityList from './RentalCityList';
import PostHotel from './PostHotel';
import RentHomeManage from './RentHomeManage';
import RentHome from './RentHome';

const rootReducers = combineReducers({
  auth:Login,
  HotelBooking:HotelBooking,
  HotelDetail:HotelDetail,
  HotelListing:HotelListing,
  Register:Register,
  RentalCityList:RentalCityList,
  PostHotel:PostHotel,
  RentHomeManage:RentHomeManage,
  RentHome:RentHome

});

export default rootReducers;
