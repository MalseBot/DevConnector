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
} from '@/app/store/slices/loginSlice';
import { addAlert } from '@/app/store/slices/alertSlice';
import type { RegisterUser } from '@/app/store/slices/registerSlice';
import type { LoginCredentials } from '@/app/store/slices/loginSlice';
import { useCallback } from 'react';

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
					message: error as string || 'Registration failed',
					duration: 5000,
				})
			);

		}
	};

	const handleLogin = async (credentials: LoginCredentials) => {
		try {
			const result = await dispatch(loginUser(credentials)).unwrap();
			console.log(result);
			
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'success',
					message: 'Login successful!',
					duration: 5000,
				})
			);
			return result;
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

	const handleLogout = () => {
		dispatch(logout());
		dispatch(
			addAlert({
				id: `${Date.now()}`,
				type: 'info',
				message: 'Logged out successfully',
				duration: 3000,
			})
		);
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
		clearLoginError: () => dispatch(clearLoginError()),
		loadUserFromToken:useCallback( (user) => dispatch(loadUserFromToken(user)), [dispatch]),
	};
};
