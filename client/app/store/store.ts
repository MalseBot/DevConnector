/** @format */

import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';

export const store = configureStore({
	reducer: {
		alert: alertReducer,
		register: registerReducer,
		login: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
