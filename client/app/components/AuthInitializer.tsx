/** @format */

'use client';
import { useEffect } from 'react';
import { useAuth } from '@/app/hooks/useAuth';

export function AuthInitializer() {
	const { loadUserFromToken } = useAuth();

	useEffect(() => {
		// On app init, check if token exists in localStorage
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('token');
			const user = localStorage.getItem('user');

			if (token && user) {
				try {
					const parsedUser = JSON.parse(user);
					loadUserFromToken(parsedUser);
				} catch (error) {
					console.error('Failed to load user from token:', error);
					localStorage.removeItem('token');
					localStorage.removeItem('user');
				}
			}
		}
	}, [loadUserFromToken]);

	return null; // This component doesn't render anything
}
