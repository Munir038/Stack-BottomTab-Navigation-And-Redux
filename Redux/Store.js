import { combineReducers } from 'redux';
import reducer from './Reducer';
import { configureStore } from '@reduxjs/toolkit';

//import reducer2 from './Reducer2';

const rootReducer = combineReducers({
  reducer,
  //Reducer2,
  //You can add more reducer here..
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
