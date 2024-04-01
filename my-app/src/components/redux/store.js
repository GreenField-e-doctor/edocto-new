import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authreducer';
// import appointmentReducer from './appointmentReducer'; // import your appointment reducer
import emailReducer from './reducers/emailReducer'; // import your email reducer

const rootReducer = combineReducers({
  auth: authReducer,
 
  email: emailReducer, // add your email reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;