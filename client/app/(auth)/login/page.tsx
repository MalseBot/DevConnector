/** @format */

'use client';
import Link from 'next/link';
import React, { useState } from 'react';
export default function Register() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const {  email, password } = formData;

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

			console.log('Success');
	};
	return (
		<section className='container'>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Log into Account
			</p>
			<form
				className='form'
				onSubmit={submitHandler}>
				
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => changeHandler(e)}
						required
					/>
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
				<button
					type='submit'
					className='btn btn-primary'>
					Submit
				</button>
			</form>
			<p className='my-1'>
				Don{"'"}t have an account? <Link href='Register'>Sign up</Link>
			</p>
		</section>
	);
}
