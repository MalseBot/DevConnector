/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/api';

export interface RegisterUser {
	name: string;
	email: string;
	password: string;
}

export interface AuthUser {
	id: string;
	name: string;
	email: string;
	token: string;
}

export interface RegisterState {
	user: AuthUser | null;
	isLoading: boolean;
	error: string | null;
	success: boolean;
}

const initialState: RegisterState = {
	user: null,
	isLoading: false,
	error: null,
	success: false,
};

// Async thunk for registering user
export const registerUser = createAsyncThunk(
	'register/registerUser',
	async (userData: RegisterUser, { rejectWithValue }) => {
		try {
			const response = await api.post('/users', userData);
			return response.data;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message || 'Registration failed');
			}
			return rejectWithValue('Registration failed');
		}
	}
);

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		// Clear register state
		clearRegisterState: (state) => {
			state.user = null;
			state.error = null;
			state.success = false;
		},

		// Clear error
		clearError: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// Pending state
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.success = false;
			})
			// Fulfilled state
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = {
					id: action.payload.user?.id || '',
					name: action.payload.user?.name || '',
					email: action.payload.user?.email || '',
					token: action.payload.token,
				};
				state.success = true;
				state.error = null;
				// Save token and user data to localStorage
				if (typeof window !== 'undefined') {
					localStorage.setItem('token', action.payload.token);
					localStorage.setItem('user', JSON.stringify(state.user));
				}
			})
			// Rejected state
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
				state.success = false;
			});
	},
});

export const { clearRegisterState, clearError } = registerSlice.actions;
export default registerSlice.reducer;
