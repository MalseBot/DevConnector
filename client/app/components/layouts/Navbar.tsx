/** @format */
'use client';
import Image from 'next/image';
import logo from '../../../public/icon.png';
import Link from 'next/link';
import { useAuth } from '@/app/hooks/useAuth';
const Navbar = () => {
	const { isAuthenticated, user } = useAuth();
	// Placeholder for auth state
	return (
		<nav className='navbar bg-dark'>
			<h1 className=' font-bold'>
				<Link href='/'>
					<Image
						src={logo}
						className='w-10 inline-block'
						alt='Logo'
					/>{' '}
					DevConnector
				</Link>
			</h1>
			<ul>
				<li>
					<Link href='/profiles'>Developers</Link>
				</li>
				{isAuthenticated ? (
					''
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
