/** @format */
'use client';
import Image from 'next/image';
import logo from '../../../public/icon.png';
import Link from 'next/link';
import { useAuth } from '@/app/hooks/useAuth';
const Navbar = () => {
	const { isAuthenticated, user,logout } = useAuth();
	// Placeholder for auth state
	return (
		<nav className='navbar bg-dark '>
			<h1 className=' self-center'>
				<Link
					href='/'
					className=' font-bold text-4xl flex items-center'>
					<Image
						src={logo}
						className='w-12 inline-block'
						alt='Logo'
					/>{' '}
					DevConnector
				</Link>
			</h1>
			<ul className=' md:text-2xl'>
				<li>
					<Link href='/profiles'>Developers</Link>
				</li>
				{isAuthenticated ? (
					<>
						<li>
							<Link href={'/dashboard'}>{user?.name}</Link>
						</li>{' '}
						<li>
							<button onClick={() => logout()}>Log out</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link href='/register'>Register</Link>
						</li>
						<li>
							<Link href='/login'>Login</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
