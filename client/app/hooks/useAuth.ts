/** @format */

'use client';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
	registerUser,
	clearRegisterState,
	clearError as clearRegisterError,
} from '@/app/store/slices/registerSlice';
import {
	loginUser,
	logout,
	clearError as clearLoginError,
	loadUserFromToken,
	deleteUser,
} from '@/app/store/slices/loginSlice';
import { addAlert } from '@/app/store/slices/alertSlice';

import { useCallback } from 'react';
import { AuthUser, LoginCredentials, RegisterUser } from '../store/types/auth';
import { clearProfile } from '../store/slices/profileSlice';
import { useProfile } from './useProfile';

/**
 * Custom hook for authentication
 * Provides register, login, logout and state access
 * Usage:
 * const { register, login, logout, user, isAuthenticated } = useAuth();
 */

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const registerState = useAppSelector((state) => state.register);
	const loginState = useAppSelector((state) => state.login);
	const {getCurrentProfile} = useProfile();

	const handleRegister = async (userData: RegisterUser) => {
		try {
			const result = await dispatch(registerUser(userData)).unwrap();
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'success',
					message: 'Registration successful! Please log in.',
					duration: 5000,
				})
			);
			return result;
		} catch (error) {
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: (error as string) || 'Registration failed',
					duration: 5000,
				})
			);
		}
	};

	const handleLogin = async (credentials: LoginCredentials) => {
		try {
			const res = await dispatch(loginUser(credentials)).unwrap();
			if(res) getCurrentProfile();

			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'success',
					message: 'Login successful!',
					duration: 5000,
				})
			);
			return res;
		} catch (error) {
			const errorMsg = error as { message: string };
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: errorMsg?.message || 'Login failed',
					duration: 5000,
				})
			);
		}
	};

	const handleLogout = () => {
		dispatch(logout());
		clearProfile()
		// Clear localStorage
		if (typeof window !== 'undefined') {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			localStorage.removeItem('profile');
		}
		console.log('After logout - localStorage cleared'); // Debug log
		dispatch(
			addAlert({
				id: `${Date.now()}`,
				type: 'info',
				message: 'Logged out successfully',
				duration: 3000,
			})
		);
	};

	const handleDeleteUser = async () => {
		try {
			const result = await dispatch(deleteUser()).unwrap();
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'success',
					message: 'User deleted successfully',
					duration: 5000,
				})
			);
			return result;
		} catch (error) {
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: (error as string) || 'User deletion failed',
					duration: 5000,
				})
			);
		}
	};

	return {
		// Register
		register: handleRegister,
		registerLoading: registerState.isLoading,
		registerError: registerState.error,
		registerUser: registerState.user,
		clearRegisterState: () => dispatch(clearRegisterState()),
		clearRegisterError: () => dispatch(clearRegisterError()),

		// Login
		login: handleLogin,
		loginLoading: loginState.isLoading,
		loginError: loginState.error,
		user: loginState.user,
		isAuthenticated: loginState.isAuthenticated,
		logout: handleLogout,
		deleteUser: handleDeleteUser,
		clearLoginError: () => dispatch(clearLoginError()),
		loadUserFromToken: useCallback(
			(user: AuthUser) => dispatch(loadUserFromToken(user)),
			[dispatch]
		),
	};
};
