/** @format */

'use client';

import { useAuth } from "./hooks/useAuth";


export default function Home() {
const {isAuthenticated} = useAuth();

	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>Developer Connector</h1>
					{isAuthenticated ? (
						<h2 className=" large font-bold text-primary">Welcome back!</h2>
					) : (
						<>
							<p className='lead'>
								Create a developer profile/portfolio, share posts and get help
								from other developers
							</p>
							<div className='buttons'>
								<a
									href='register.html'
									className='btn btn-primary'>
									Sign Up
								</a>

								<a
									href='login.html'
									className='btn btn-light'>
									Login
								</a>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
