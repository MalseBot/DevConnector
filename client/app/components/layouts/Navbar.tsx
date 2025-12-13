/** @format */
'use client';
import { FaCode } from 'react-icons/fa';
import { IoIosLogOut, IoMdChatbubbles } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { TbLogin } from 'react-icons/tb';
import { IoCreateOutline } from 'react-icons/io5';
import { RiUserCommunityLine } from 'react-icons/ri';

import Link from 'next/link';
import { useAuth } from '@/app/hooks/useAuth';
const Navbar = () => {
	const { isAuthenticated, user,logout } = useAuth();
	// Placeholder for auth state
	return (
		<nav className='navbar bg-dark'>
			<h1 className=' self-center'>
				<Link
					href='/'
					className='text-4xl flex items-center'>
					<FaCode className=' mx-1' />
					DevConnector
				</Link>
			</h1>
			<ul className=' md:text-xl flex items-center'>
				<li>
					<Link
						href='/profiles'
						className='flex items-center gap-1'>
						<RiUserCommunityLine />
						Developers
					</Link>
				</li>
				<li>
					<Link
						href='/posts'
						className='flex items-center gap-1'>
						<IoMdChatbubbles />
						Posts
					</Link>
				</li>
				{isAuthenticated ? (
					<>
						<li>
							<Link
								href={'/dashboard'}
								className='flex items-center gap-1'>
								<CgProfile />
								<span className='hide-sm'>{user?.name}</span>
							</Link>
						</li>
						<li>
							<button
								onClick={() => logout()}
								className='flex items-center gap-1'
								type='button'>
								<IoIosLogOut />
								<span className='hide-sm'>Log out</span>
							</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link
								href='/register'
								className='flex items-center gap-1'
								type='button'>
								<IoCreateOutline />
								<span className={'hide-sm'}>Register</span>
							</Link>
						</li>
						<li>
							<Link
								href='/login'
								className='flex items-center gap-1'
								type=' button'>
								<TbLogin />
								<span className={'hide-sm'}>Login</span>
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
