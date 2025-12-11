/** @format */

'use client';
import { ReactNode } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import Loading from './Loading';

interface ProtectedRouteProps {
	children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { loginLoading } = useAuth();
	
	// Show loading state while checking auth
	if (loginLoading) {
		return <Loading />;
	}

	return <>{children}</>;
}
