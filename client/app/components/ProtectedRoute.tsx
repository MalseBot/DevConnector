/** @format */

'use client';
import { ReactNode } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import { redirect } from 'next/navigation';

interface ProtectedRouteProps {
	children: ReactNode;
	fallback?: ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
	const { isAuthenticated, loginLoading } = useAuth();
	
	// Show loading state while checking auth
	if (loginLoading) {
		return fallback || <div>Loading...</div>;
	}

	// Redirect to login if not authenticated
	if (!isAuthenticated) {
		redirect('/login');}

	return <>{children}</>;
}
