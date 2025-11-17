/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert, AlertState } from '../types/alert';

const initialState: AlertState = {
	alerts: [],
};

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		addAlert: (state, action: PayloadAction<Alert>) => {
			state.alerts.push(action.payload);
		},
		removeAlert: (state, action: PayloadAction<string>) => {
			state.alerts = state.alerts.filter(
				(alert) => alert.id !== action.payload
			)}}});


export const {addAlert, removeAlert} = alertSlice.actions
export default alertSlice.reducer