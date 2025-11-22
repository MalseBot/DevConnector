/** @format */

'use client';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addAlert } from '../store/slices/alertSlice';
import { clearError, clearProfile, createUpdateProfile, getCurrentProfile, getProfileById } from '../store/slices/profileSlice';

export const useProfile = () => {
	const dispatch = useAppDispatch();
	const profileState = useAppSelector((state) => state.profile);
	const fetchCurrentProfile = async () => {
		try {
			const response = await dispatch(getCurrentProfile()).unwrap();
			return response;
		} catch (error) {
			const errorMsg = error as string;
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: errorMsg,
					duration: 5000,
				})
			);
		}
	};

    const fetchProfileById = async (userId:string) => {
			try {
				const response = await dispatch(getProfileById(userId)).unwrap();
				return response;
			} catch (error) {
				const errorMsg = error as string;
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: errorMsg,
						duration: 5000,
					})
				);
				throw error;
			}
		};

        const saveProfile = async (profileData:any) => {
					try {
						const response = await dispatch(createUpdateProfile(profileData)).unwrap();
						return response;
					} catch (error) {
						const errorMsg = error as string;
						dispatch(
							addAlert({
								id: `${Date.now()}`,
								type: 'error',
								message: errorMsg,
								duration: 5000,
							})
						);
						throw error;
					}
				};
                return{
                    profile: profileState.profile,
                    profiles: profileState.profiles,
                    profileLoading: profileState.isLoading,
                    profileError: profileState.error,
                    
                    getCurrentProfile: fetchCurrentProfile,
                    getProfileById: fetchProfileById,
                    createUpdateProfile: saveProfile,
                    clearProfile:()=>dispatch(clearProfile()),
                    clearProfileError:()=>dispatch(clearError())
                }
            };
