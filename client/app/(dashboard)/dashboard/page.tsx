/** @format */
'use client';
import { useProfile } from '@/app/hooks/useProfile';
import Link from 'next/link';
import { useEffect } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import Loading from '@/app/components/Loading';
import { IoMdPerson } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FaBlackTie, FaGraduationCap } from 'react-icons/fa';

const Dashboard = () => {
	const router = useRouter();
	const {
		profile,
		profileLoading,
		getCurrentProfile,
		deleteExperience,
		deleteEducation,
	} = useProfile();
	const { isAuthenticated, user, deleteUser } = useAuth();

	// Fetch profile when authentication state becomes true (or on mount if already authenticated)
	useEffect(() => {
		if (!isAuthenticated) {
			
			router.push('/login');
		}else if(!profile){
			getCurrentProfile()
		}else if(!profile){
			router.push('/profile-form');
		}
	}, [isAuthenticated, profile, router, getCurrentProfile]);

	return (
		<>
			{profileLoading ? (
				<Loading />
			) : (
				<section className='container-custom'>
					<h1 className='large font-bold text-primary'>Dashboard</h1>
					<p className='lead flex items-center gap-2  font-bold capitalize'>
						<IoMdPerson className='text-2xl' />
						Welcome {user?.name}
					</p>
					<div className='dash-buttons'>
						<Link
							href='/profile-form'
							className='btn  '>
							<IoPersonCircleOutline className='text-primary text-2xl' />
							Edit Profile
						</Link>
						<Link
							href='/add-experience'
							className='btn  '>
							<FaBlackTie className='text-primary text-2xl' />
							Add Experience
						</Link>
						<Link
							href='/add-education'
							className='btn  '>
							<FaGraduationCap className='text-primary text-2xl' />
							Add Education
						</Link>
					</div>

					<h2 className='my-2 text-xl font-bold'>Experience Credentials</h2>
					<table className='table w-full'>
						<thead>
							<tr>
								<th>Company</th>
								<th className='hide-sm'>Title</th>
								<th className='hide-sm'>Years</th>
								<th className='hide-sm'>Description</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{profile?.experience[0] !== undefined ? (
								profile.experience.map((exp) => (
									<tr key={exp._id}>
										<td>{exp.company}</td>
										<td className='hide-sm'>{exp.title}</td>
										<td className='hide-sm'>
											{exp.current
												? `${format(exp.from, 'dd,MMMM,yyyy')} - currently`
												: `${format(exp.from, 'dd,MMMM,yyyy')} - ${format(
														exp.to,
														'dd,MMMM,yyyy'
												  )}`}
										</td>
										<td className='hide-sm'>{exp.description}</td>
										<td>
											<button
												className='btn btn-danger'
												onClick={() => deleteExperience(exp._id)}>
												Delete
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<h3>Show Your Experience and Skills now</h3>
								</tr>
							)}
						</tbody>
					</table>

					<h2 className='my-2'>Education Credentials</h2>
					<table className='table w-full'>
						<thead>
							<tr>
								<th>School</th>
								<th className='hide-sm'>Degree</th>
								<th className='hide-sm'>Years</th>
								<th className='hide-sm'>Description</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{profile?.education[0] !== undefined ? (
								profile?.education.map((edu) => (
									<tr key={edu._id}>
										<td>{edu.school}</td>
										<td className='hide-sm'>{edu.degree}</td>
										<td className='hide-sm'>
											{edu.to
												? `${format(edu.from, 'dd,MMMM,yyyy')} - currently`
												: `${format(edu.from, 'dd,MMMM,yyyy')} - ${format(
														edu.to,
														'dd,MMMM,yyyy'
												  )}`}
										</td>
										<td className='hide-sm'>{edu.description}</td>
										<td>
											<button
												className='btn btn-danger'
												onClick={() => deleteEducation(edu._id)}>
												Delete
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<h3>Show Your Education and Background now</h3>
								</tr>
							)}
						</tbody>
					</table>

					<div className='my-2'>
						<button
							className='btn btn-danger'
							onClick={deleteUser}>
							<i className='fas fa-user-minus'></i>
							Delete My Account
						</button>
					</div>
				</section>
			)}
		</>
	);
};

export default Dashboard;
