/** @format */

'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addAlert } from '../store/slices/alertSlice';
import { clearError, clearProfile, createUpdateProfile, getCurrentProfile, getProfileById } from '../store/slices/profileSlice';

export const useProfile = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const profileState = useAppSelector((state) => state.profile);
	
	// Wrap in useCallback to prevent recreating on every render
	const fetchCurrentProfile = useCallback(async () => {
		try {
			const response = await dispatch(getCurrentProfile()).unwrap();
			if (!response) {
				console.log(response);
				
				router.push('/profile-form');
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'warning',
						message: 'Please create your profile',
						duration: 5000,
					})
				);
			}
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
	}, [dispatch, router]);

    const fetchProfileById = useCallback(async (userId: string) => {
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
	}, [dispatch]);

    const saveProfile = useCallback(async (profileData: any) => {
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
	}, [dispatch]);
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
