/** @format */

import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../store/hooks';
import { useCallback } from 'react';
import { addAlert, removeAlert } from '../store/slices/alertSlice';

interface Alert {
	id: string;
	type: 'success' | 'error' | 'warning' | 'info';
	message: string;
	duration?: number; // in milliseconds
}

export const useAlert = () => {
	const dispatch = useAppDispatch();

	const showAlert = useCallback(
		(alert: Omit<Alert, 'id'>) => {
			const id = uuidv4();
			dispatch(addAlert({ ...alert, id }));

			return id;
		},
		[dispatch]
	);

	const hideAlert = useCallback(
		(id: string) => {
			dispatch(removeAlert(id));
		},
		[dispatch]
	);

	return {
		showAlert,
		hideAlert,
	};
};
