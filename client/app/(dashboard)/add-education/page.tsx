/** @format */
"use client";
import { useProfile } from '@/app/hooks/useProfile';
import Link from 'next/link';
import { useState } from 'react';

const AddEducation = () => {
	const [Checked, setChecked] = useState(false);
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: Checked,
		description: '',
	});
	const { addEducation } = useProfile();
	const changeHandler = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	): void => setFormData({ ...formData, [e.target.name]: e.target.value });

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await addEducation(formData);
			// redirect to dashboard after successful save
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section className='container'>
			<h1 className='large text-primary'>Add Your Education</h1>
			<p className='lead'>
				<i className='fas fa-graduation-cap'></i> Add any school, bootcamp, etc
				that you have attended
			</p>
			<small>* = required field</small>
			<form
				className='form'
				onSubmit={submitHandler}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* School or Bootcamp'
						name='school'
						onChange={(e) => changeHandler(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Degree or Certificate'
						name='degree'
						onChange={(e) => changeHandler(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Field Of Study'
						name='fieldofstudy'
						onChange={(e) => changeHandler(e)}
					/>
				</div>
				<div className='form-group'>
					<h4>From Date</h4>
					<input
						type='date'
						name='from'
						onChange={(e) => changeHandler(e)}
					/>
				</div>
				<div className='form-group'>
					<p>
						<input
							type='checkbox'
							name='current'
							checked={Checked}
							onChange={()=>setChecked(!Checked)}
						/>{' '}
						Current School or Bootcamp
					</p>
				</div>
				<div className='form-group'>
					<h4>To Date</h4>
					<input
						type='date'
						name='to'
						onChange={(e) => changeHandler(e)}
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='description'
						cols={30}
						rows={5}
						onChange={(e) => changeHandler(e)}
						placeholder='Program Description'></textarea>
				</div>
				<button type='submit'>Add</button>
				<Link
					className='btn btn-light my-1'
					href='/dashboard'>
					Go Back
				</Link>
			</form>
		</section>
	);
};

export default AddEducation;
