/** @format */

'use client';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addAlert } from '../store/slices/alertSlice';
import {
	clearError,
	clearProfile,
	createUpdateProfile,
	getCurrentProfile,
	getProfileById,
	addExperience,
	addEducation,
	deleteEducation,
	deleteExperience,
} from '../store/slices/profileSlice';

export const useProfile = () => {
	const dispatch = useAppDispatch();
	const profileState = useAppSelector((state) => state.profile);

	// Wrap in useCallback to prevent recreating on every render
	const fetchCurrentProfile = useCallback(async () => {
		try {
			const response = await dispatch(getCurrentProfile()).unwrap();
			return response;
		} catch (error: any) {
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: error?.message || 'Profile Error',
					duration: 5000,
				})
			);
		}
	}, [dispatch]);

	const fetchProfileById = useCallback(
		async (userId: string) => {
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
		},
		[dispatch]
	);

	const saveProfile = useCallback(
		async (profileData: any) => {
			try {
				const response = await dispatch(
					createUpdateProfile(profileData)
				).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Profile saved successfully',
						duration: 5000,
					})
				);
				return response;
			} catch (error) {
				const errorMsg = error as string;
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: errorMsg || 'Failed to save profile',
						duration: 5000,
					})
				);
				throw error;
			}
		},
		[dispatch]
	);

	const addExperienceToProfile = useCallback(
		async (experienceData: any) => {
			try {
				const response = await dispatch(addExperience(experienceData)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Experience added successfully',
						duration: 5000,
					})
				);
				return response;
			} catch (error) {
				const errorMsg = error as string;
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: errorMsg || 'Failed to add experience',
						duration: 5000,
					})
				);
				throw error;
			}
		},
		[dispatch]
	);

	const useDeleteExperience = useCallback(
		async (expId: string) => {
			try {
				const response = await dispatch(deleteExperience(expId)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Experience deleted successfully',
						duration: 5000,
					})
				);
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
		},
		[dispatch]
	);

	const addEducationToProfile = useCallback(
		async (educationData: any) => {
			try {
				const response = await dispatch(addEducation(educationData)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Education added successfully',
						duration: 5000,
					})
				);
				return response;
			} catch (error) {
				const errorMsg = error as string;
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: errorMsg || 'Failed to add education',
						duration: 5000,
					})
				);
				throw error;
			}
		},
		[dispatch]
	);

	const useDeleteEducation = useCallback(
		async (eduId: string) => {
			try {
				const response = await dispatch(deleteEducation(eduId)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Education deleted successfully',
						duration: 5000,
					})
				);
				return response;
			} catch (error) {
				
				const errorMsg = error as string;
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: errorMsg ,
						duration: 5000,
					})
				);
				throw error;
			}
		},
		[dispatch]
	);

	return {
		profile: profileState.profile,
		profiles: profileState.profiles,
		profileLoading: profileState.isLoading,
		profileError: profileState.error,

		getCurrentProfile: fetchCurrentProfile,
		getProfileById: fetchProfileById,
		createUpdateProfile: saveProfile,
		addExperience: addExperienceToProfile,
		deleteExperience: useDeleteExperience,
		addEducation: addEducationToProfile,
		deleteEducation: useDeleteEducation,
		clearProfile: () => dispatch(clearProfile()),
		clearProfileError: () => dispatch(clearError()),
	};
};
