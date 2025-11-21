/** @format */

import { ProtectedRoute } from '../components/ProtectedRoute';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ProtectedRoute>
			<section className='container-custom'>{children}</section>
		</ProtectedRoute>
	);
}
