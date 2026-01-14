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
	getAllProfiles,
	addExperience,
	addEducation,
	deleteEducation,
	deleteExperience,
	getUserGithubRepos,
} from '../store/slices/profileSlice';
import { Education, Experience, ProfileCU } from '../store/types/profile';
import { getErrorMessage } from '@/errorHandler';

// helper to extract a string message from unknown errors


export const useProfile = () => {
	const dispatch = useAppDispatch();
	const profileState = useAppSelector((state) => state.profile);

	// Wrap in useCallback to prevent recreating on every render
	const fetchCurrentProfile = useCallback(async () => {
		try {
			const response = await dispatch(getCurrentProfile()).unwrap();
			return response;
		} catch (error: unknown) {
			const errorMsg = getErrorMessage(error);
			throw errorMsg;
		}
	}, [dispatch]);

	const fetchProfileById = useCallback(
		async (userId: string) => {
			try {
				const response = await dispatch(getProfileById(userId)).unwrap();
				return response;
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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

	const allProfiles = useCallback(async () => {
		try {
			const res = await dispatch(getAllProfiles()).unwrap();
			return res;
		} catch (error) {
			const errorMsg = getErrorMessage(error);
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: errorMsg || 'Failed to fetch profiles',
					duration: 5000,
				})
			);
			throw error;
		}
	},[dispatch]);

	const saveProfile = useCallback(
		async (profileData: ProfileCU) => {
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
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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
		async (experienceData: Partial<Experience>) => {
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
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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
		async (educationData: Education) => {
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
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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

	const fetchGithubRepos = useCallback(
		async (username: string) => {
			try {
				const response = await dispatch(getUserGithubRepos(username)).unwrap();
				return response.data;
			} catch (error: unknown) {
				const errorMsg = getErrorMessage(error);
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

	return {
		profile: profileState.profile,
		profiles: profileState.profiles,
		profileLoading: profileState.isLoading,
		repos:profileState.repos,
		profileError: profileState.error,
		profileDetail: profileState.profileDetail,
		getUserGithubRepos:fetchGithubRepos,
		getCurrentProfile: fetchCurrentProfile,
		getAllProfiles:allProfiles,
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
