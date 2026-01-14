"use client";
import { useProfile } from '@/app/hooks/useProfile';
import { useAuth } from '@/app/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AddExperience = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		title: '',
		company: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: '',
		});
		const { addExperience, getCurrentProfile, profile, profileLoading } = useProfile();
		const { isAuthenticated, loginLoading } = useAuth();
		const [checkedProfile, setCheckedProfile] = useState(false);

		useEffect(() => {
			if (!isAuthenticated || loginLoading || profileLoading) return;
			if (profile) {
				if (!checkedProfile) setCheckedProfile(true);
				return;
			}
			if (checkedProfile) return;

			(async () => {
				await getCurrentProfile();
				setCheckedProfile(true);
			})();
		}, [
			isAuthenticated,
			loginLoading,
			profileLoading,
			profile,
			checkedProfile,
			getCurrentProfile,
		]);

		useEffect(() => {
			if (!checkedProfile || profileLoading) return;
			if (!profile) {
				router.push('/profile-form');
			}
		}, [checkedProfile, profileLoading, profile, router]);
		const changeHandler = (
			e: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>
		): void => setFormData({ ...formData, [e.target.name]: e.target.value });
	
		const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
	
			try {
				await addExperience(formData);
				// redirect to dashboard after successful save
			} catch (err) {
				console.log(err);
			}
		};
  return (
		<section className='container'>
			<h1 className='large text-primary'>Add An Experience</h1>
			<p className='lead'>
				<i className='fas fa-code-branch'></i> Add any developer/programming
				positions that you have had in the past
			</p>
			<small>* = required field</small>
			<form
				className='form'
				onSubmit={submitHandler}>
				<div className='form-group'>
					<input
						type='text'
						onChange={changeHandler}
						placeholder='* Job Title'
						name='title'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						onChange={changeHandler}
						placeholder='* Company'
						name='company'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						onChange={changeHandler}
						placeholder='Location'
						name='location'
					/>
				</div>
				<div className='form-group'>
					<h4>From Date</h4>
					<input
						type='date'
						onChange={changeHandler}
						name='from'
					/>
				</div>
				<div className='form-group'>
					<p>
						<input
							type='checkbox'
							name='current'
							checked={formData.current}
							onChange={(e) =>
								setFormData({
									...formData,
									current: e.target.checked,
									to: e.target.checked ? '' : formData.to,
								})
							}
							value=''
						/>
						Current Job
					</p>
				</div>
				<div className='form-group'>
					<h4>To Date</h4>
					<input
						type='date'
						onChange={changeHandler}
						name='to'
						disabled={formData.current}
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='description'
						onChange={changeHandler}
						cols={30}
						rows={5}
						placeholder='Job Description'></textarea>
				</div>
				<button
					type='submit'
					className='btn btn-primary my-1'>
					ADD
				</button>
				<Link
					className='btn btn-light my-1'
					href='/dashboard'>
					Go Back
				</Link>
			</form>
		</section>
	);
}

export default AddExperience
