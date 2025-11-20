/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/api';

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface AuthUser {
	id: string;
	name: string;
	email: string;
	token: string;
}

export interface LoginState {
	user: AuthUser | null;
	isLoading: boolean;
	error: string | null;
	isAuthenticated: boolean;
}

const initialState: LoginState = {
	user: null,
	isLoading: false,
	error: null,
	isAuthenticated: false,
};

// Async thunk for logging in user
export const loginUser = createAsyncThunk(
	'login/loginUser',
	async (credentials: LoginCredentials, { rejectWithValue }) => {
		try {
			const response = await api.post('/auth', credentials);
			// Assuming the API returns { token, user: { id, name, email } }
			return response.data;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message || 'Login failed');
			}
			return rejectWithValue('Login failed');
		}
	}
);

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		// Logout user
		logout: (state) => {
			state.user = null;
			state.isAuthenticated = false;
			state.error = null;
			// Clear token and user data from localStorage
			if (typeof window !== 'undefined') {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
			}
		},

		// Clear error
		clearError: (state) => {
			state.error = null;
		},

		// Load user from token (on app init)
		loadUserFromToken: (state, action: { payload: AuthUser | null }) => {
			if (action.payload) {
				state.user = action.payload;
				state.isAuthenticated = true;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			// Pending state
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			// Fulfilled state
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = {
					id: action.payload.user?.id || '',
					name: action.payload.user?.name || '',
					email: action.payload.user?.email || '',
					token: action.payload.token,
				};
				state.isAuthenticated = true;
				state.error = null;
				// Save token and user data to localStorage
				if (typeof window !== 'undefined') {
					localStorage.setItem('token', action.payload.token || 'no token');
					localStorage.setItem('user', JSON.stringify(state.user));
				}
			})
			// Rejected state
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
				state.isAuthenticated = false;
				state.user = null;
			});
	},
});

export const { logout, clearError, loadUserFromToken } = loginSlice.actions;
export default loginSlice.reducer;
