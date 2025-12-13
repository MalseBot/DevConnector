/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/api';
import { ProfileState, Education, Experience, ProfileCU } from '../types/profile';
import { getErrorMessage } from '@/errorHandler';

// helper to extract a string message from unknown errors

const initialState: typeof ProfileState = ProfileState;

export const getCurrentProfile = createAsyncThunk(
	'profile/getCurrentProfile',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get('/profiles/me');
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

	export const getAllProfiles = createAsyncThunk(
		'profile/getAllProfiles',
		async (_, { rejectWithValue }) => {
			try {
				const response = await api.get('/profiles');
				return response.data;
			} catch (error: unknown) {
				return rejectWithValue(
					getErrorMessage(error) || 'Failed to fetch profiles'
				);
			}
		}
	);

export const getProfileById = createAsyncThunk(
	'profile/getProfileById',
	async (userId: string, { rejectWithValue }) => {
		try {
			const response = await api.get(`/profiles/user/${userId}`);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to fetch profile'
			);
		}
	}
);

export const createUpdateProfile = createAsyncThunk(
	'profile/createUpdateProfile',
	async (profileData: Partial<ProfileCU>, { rejectWithValue }) => {
		try {
			console.log(profileData);

			const response = await api.post('/profiles', profileData);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const addExperience = createAsyncThunk(
	'profile/addExperience',
	async (experienceData: Partial<Experience>, { rejectWithValue }) => {
		try {
			console.log(experienceData);

			const response = await api.put('/profiles/experience', experienceData);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to save profile'
			);
		}
	}
);

export const deleteExperience = createAsyncThunk(
	'profile/deleteExperience',
	async (eduId: string, { rejectWithValue }) => {
		try {
			const response = await api.delete(`/profiles/experience/${eduId}`);

			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to delete experience'
			);
		}
	}
);

export const addEducation = createAsyncThunk(
	'profile/addEducation',
	async (educationData: Partial<Education>, { rejectWithValue }) => {
		try {
			console.log(educationData);
			const response = await api.put('/profiles/education', educationData);
			console.log(response);

			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to save profile'
			);
		}
	}
);

export const deleteEducation = createAsyncThunk(
	'profile/deleteEducation',
	async (eduId: string, { rejectWithValue }) => {
		try {
			const response = await api.delete(`/profiles/education/${eduId}`);

			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to delete education'
			);
		}
	}
);

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		clearProfile: (state) => {
			state.profile = null;
			state.error = null;
		},

		// Clear error
		clearError: (state) => {
			state.error = null;
		},

		// Clear profiles list
		clearProfiles: (state) => {
			state.profiles = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCurrentProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCurrentProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(getCurrentProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getAllProfiles.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllProfiles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profiles = action.payload;
			})
			.addCase(getAllProfiles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getProfileById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProfileById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profileDetail = action.payload;
			})
			.addCase(getProfileById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(createUpdateProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createUpdateProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(createUpdateProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message as string;
			})
			.addCase(addEducation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addEducation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(addEducation.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(deleteEducation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteEducation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(deleteEducation.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(addExperience.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addExperience.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(addExperience.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(deleteExperience.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteExperience.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
			})
			.addCase(deleteExperience.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
});
export const { clearError, clearProfile, clearProfiles } = profileSlice.actions;
export default profileSlice.reducer;
