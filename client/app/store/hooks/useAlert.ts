import { v4 as uuidv4 } from 'uuid';
import { useAppDisbatch } from '../hooks';
import { useCallback } from 'react';
import { addAlert, removeAlert } from '../slices/alertSlice';
import { Alert } from '../types/alert';


export const useAlert = ()=>{
    const dispatch = useAppDisbatch()

    const showAlert = useCallback((alert:Omit<Alert,'id'>)=>{
        const id = uuidv4()
        dispatch(addAlert({...alert,id}))

        return id;
    },[dispatch]);

    const hideAlert = useCallback(
			(id: string) => {
				dispatch(removeAlert(id));
			},
			[dispatch]
		);

    return {
        showAlert,
        hideAlert
    }
}