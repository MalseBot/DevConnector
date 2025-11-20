/** @format */

'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
export default function Register() {
	const router = useRouter();
	const { register, registerLoading, isAuthenticated } = useAuth();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	interface ChangeEvent {
		target: {
			name: string;
			value: string;
		};
	}

	const changeHandler = (e: ChangeEvent): void =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== password2) {
			return console.log('password does not match');
		} else {
			await register({
				name: formData.name,
				email: formData.email,
				password: formData.password,
			});
		}
	};
	useEffect(() => {
			if (isAuthenticated) {
				router.push('/');
			}
		}, [isAuthenticated, router]);
	return (
		<section className='container'>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>
			<form
				className='form'
				onSubmit={submitHandler}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={(e) => changeHandler(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => changeHandler(e)}
						required
					/>
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						minLength={6}
						value={password}
						onChange={(e) => changeHandler(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						minLength={6}
						value={password2}
						onChange={(e) => changeHandler(e)}
					/>
				</div>
				<button disabled={registerLoading}>
					{registerLoading ? 'Registering...' : 'Register'}
				</button>
			</form>
			<p className='my-1'>
				Already have an account? <Link href='login'>Sign In</Link>
			</p>
		</section>
	);
}
