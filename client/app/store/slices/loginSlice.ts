/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/api';
import { AuthUser, LoginCredentials, LoginState } from '../types/auth';
import { clearProfile } from './profileSlice';
import { getErrorMessage } from '@/errorHandler';

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
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to delete education'
			);
		}
	}
);

export const validateToken = createAsyncThunk(
	'login/validateToken',
	async (_, { rejectWithValue }) => {
		try {
			// include token in Authorization header (Bearer)
			const response = await api.get('/auth');
			return response.data; // Assuming it returns user data if token is valid
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to delete education'
			);
		}
	}
);

export const deleteUser = createAsyncThunk(
	'register/deleteUser',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.delete(`/profiles`);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(
				getErrorMessage(error) || 'Failed to delete education'
			);
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
			state.isLoading = false;
			state.error = null;
			clearProfile();

			// Clear token and user data from localStorage
			console.log(window);
			localStorage.removeItem('token');
			localStorage.removeItem('user');
		},

		// Clear error
		clearError: (state) => {
			state.error = null;
			state.isLoading = false;
		},

		// Load user from token (on app init)
		loadUserFromToken: (state, action: { payload: AuthUser }) => {
			if (action.payload) {
				state.user = action.payload;
				state.isAuthenticated = true;
				state.isLoading = false;
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
				state.user = action.payload;
				state.isLoading = false;
				state.isAuthenticated = true;
				console.log(action);

				const token = action.payload.token;
				if (token) {
					const decodedToken = JSON.parse(atob(token.split('.')[1]));
					const userId = decodedToken.user.id;

					state.user = {
						_id: userId,
						name: action.payload.user.name,
						email: action.payload.user.email,
						token: token,
					};
				}
				// Save token and user data to localStorage
				if (typeof window !== 'undefined') {
					localStorage.setItem('token', token || 'no token');
					localStorage.setItem('user', JSON.stringify(state.user));
				}
			})
			// Rejected state
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
				state.isAuthenticated = false;
				state.user = null;
			})
			// Validate token lifecycle
			.addCase(validateToken.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(validateToken.fulfilled, (state, action) => {
				state.isLoading = false;
				// action.payload should contain user info returned by backend
				const payload = action.payload;
				if (payload) {
					// preserve token from localStorage if present
					const token =
						typeof window !== 'undefined'
							? localStorage.getItem('token')
							: undefined;
					state.user = {
						_id: payload.user?._id || payload._id || '',
						name: payload.user?.name || payload.name || '',
						email: payload.user?.email || payload.email || '',
						token: token || '',
					};
					state.isAuthenticated = true;
					// refresh stored user data
					if (typeof window !== 'undefined' && state.user) {
						localStorage.setItem('user', JSON.stringify(state.user));
					}
				}
			})
			.addCase(validateToken.rejected, (state, action) => {
				// Token invalid or expired -> force logout
				state.isLoading = false;
				state.error = (action.payload as string) || 'Token invalid';
				state.isAuthenticated = false;
				state.user = null;
				if (typeof window !== 'undefined') {
					localStorage.removeItem('token');
					localStorage.removeItem('user');
				}
			}).addCase(deleteUser.fulfilled, (state) => {
				// On user deletion, clear state
				state.user = null;
				state.isAuthenticated = false;
				state.isLoading = false;
				state.error = null;
				if (typeof window !== 'undefined') {
					localStorage.removeItem('token');
					localStorage.removeItem('user');
				}
			}).addCase(deleteUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			}).addCase(deleteUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			});
	},
});

export const { logout, clearError, loadUserFromToken } = loginSlice.actions;
export default loginSlice.reducer;
