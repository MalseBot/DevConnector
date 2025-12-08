/** @format */

'use client';
import { ReactNode } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import { redirect } from 'next/navigation';
import Loading from './Loading';
import { AuthInitializer } from './AuthInitializer';

interface ProtectedRouteProps {
	children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated, loginLoading } = useAuth();
	
	// Show loading state while checking auth
	if (loginLoading) {
		return <Loading />;
	}

	return <>{children}</>;
}
