/** @format */

'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/store/hooks';
import { loadUserFromToken, validateToken } from '@/app/store/slices/loginSlice';
import { AuthUser } from '@/app/store/types/auth';

export function AuthInitializer() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const token = localStorage.getItem('token');
		if (!token) return;

		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			try {
				const parsedUser = JSON.parse(storedUser) as AuthUser;
				if (parsedUser?.token) {
					dispatch(loadUserFromToken(parsedUser));
				}
			} catch {
				// Ignore malformed user cache; validation will handle auth state.
			}
		}

		// Dispatch validateToken; the slice will clear storage on rejection
		dispatch(validateToken());
	}, [dispatch]);

	return null;
}
