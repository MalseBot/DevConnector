/** @format */

'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/hooks/useAuth';

/**
 * Component that runs on app initialization to restore user session from localStorage
 * Checks for saved token and user data, restores auth state if available
 */
export function AuthInitializer() {
	const { loadUserFromToken } = useAuth();

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') return;

		const token = localStorage.getItem('token');
		const userJson = localStorage.getItem('user');

		// If both token and user data exist, restore the session
		if (token && userJson) {
			try {
				const user = JSON.parse(userJson);
				loadUserFromToken(user);
			} catch (error) {
				console.error('Failed to parse user data from localStorage:', error);
				// Clear corrupted data
				localStorage.removeItem('token');
				localStorage.removeItem('user');
			}
		}
	}, [loadUserFromToken]);

	// This component doesn't render anything
	return null;
}
