/** @format */

import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';
import profileReducer from './slices/profileSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
	reducer: {
		alert: alertReducer,
		register: registerReducer,
		login: loginReducer,
		profile:profileReducer,
		posts: postReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
