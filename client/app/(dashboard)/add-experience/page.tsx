"use client";
import { useProfile } from '@/app/hooks/useProfile';
import React, { useState } from 'react'
import Link from 'next/link';

const AddExperience = () => {
	const [checked, setChecked] = useState(false);
	const [formData, setFormData] = useState({
		title: '',
		company: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: '',
		});
		const { addExperience } = useProfile();
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
							checked={checked}
							onChange={() => setChecked(!checked)}
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