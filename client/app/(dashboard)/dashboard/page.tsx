/** @format */

'use client';

import { useAlert } from '@/app/hooks/useAlert';
import { useAuth } from '@/app/hooks/useAuth';
import { useProfile } from '@/app/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
	const router = useRouter();
	const { showAlert } = useAlert();
	const { isAuthenticated } = useAuth();
	const { profile, getCurrentProfile, profileLoading } = useProfile();
	useEffect(() => {
		setTimeout(() => {
			if (isAuthenticated && !profile && !profileLoading) {
				if (!profile) {
					showAlert({
						type: 'error',
						message: 'Please create your profile',
						duration: 5000,
					});
					router.push('/profile-form');
				} else {
					getCurrentProfile();
				}
			}
		}, 3000);
	}, [
		isAuthenticated,
		profile,
		profileLoading,
		getCurrentProfile,
		router,
		showAlert,
	]);

	return (
		<>
			Dashboard
			<h2>{profile?.user.name}</h2>
		</>
	);
};

export default Dashboard;
