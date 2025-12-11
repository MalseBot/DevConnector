/** @format */

'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/store/hooks';
import { validateToken } from '@/app/store/slices/loginSlice';

export function AuthInitializer() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const token = localStorage.getItem('token');
		if (!token) return;

		// Dispatch validateToken; the slice will clear storage on rejection
		dispatch(validateToken());
	}, [dispatch]);

	return null;
}
