/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/api';

interface User {
	id: string;
	name: string;
	email: string;
	avatar: string;
}

interface Experience {
	id: string;
	title: string;
	company: string;
	location: string;
	from: string;
	to?: string;
	current: boolean;
	description?: string;
}

interface Education {
	id: string;
	school: string;
	degree: string;
	fieldofstudy: string;
	from: string;
	to?: string;
	current: boolean;
	description?: string;
}

interface Social {
	youtube?: string;
	twitter?: string;
	facebook?: string;
	linkedin?: string;
	instagram?: string;
}

interface Profile {
	user: User;
	company: string;
	website: string;
	location: string;
	status: string;
	skills: string;
	bio: string;
	githubusername: string;
	experience: Experience[];
	education: Education[];
	social: Social;
	date: string;
}

const ProfileState = {
	profile: null as Profile | null,
	profiles: [] as Profile[],
	repos: [],
	isLoading: false,
	error: null as string | null,
};

const initialState: typeof ProfileState = ProfileState;

export const getCurrentProfile = createAsyncThunk(
	'profile/getCurrentProfile',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get('/profiles/me');
			return response.data;
		} catch (error: any) {
			rejectWithValue(error.response.data.errors?.[0].msg);
		}
	}
);

export const getProfileById = createAsyncThunk(
	'profile/getProfileById',
	async (userId: string, { rejectWithValue }) => {
		try {
			const response = await api.get(`/profiles/user/${userId}`);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.errors?.[0].msg || 'Failed to fetch profile'
			);
		}
	}
);

export const createUpdateProfile = createAsyncThunk(
	'profile/createUpdateProfile',
	async (profileData: Partial<Profile>, { rejectWithValue }) => {
		try {
			const response = await api.post('/profiles', profileData);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.errors?.[0].msg || 'Failed to create/update profile'
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
			.addCase(getProfileById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProfileById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = action.payload;
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
				state.error = action.payload as string;
			});
	},
});
export const { clearError, clearProfile, clearProfiles } = profileSlice.actions;
export default profileSlice.reducer;
