/** @format */

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className='container-custom'>{children}</section>;
}