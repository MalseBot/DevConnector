/** @format */

'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/app/hooks/useProfile';
import Loading from '@/app/components/Loading';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import imageHolder from '@/public/placeholder.jpg';
import { FaCheck } from 'react-icons/fa';

export default function ProfileByIdPage() {
	const params = useParams();
	const id = params?.id as string
	
	const { profileDetail, profileLoading,profile, getProfileById,getUserGithubRepos, repos } =
		useProfile();
	useEffect(() => {		
		getProfileById(id);
	}, [id, getProfileById,]);
	useEffect(()=>{
		if(profileDetail)
		getUserGithubRepos(profileDetail?.githubusername)
	},[getUserGithubRepos,profileDetail])

	if (profileLoading || !profileDetail) return <Loading />;

	return (
		<section className='container-custom'>
			<Link
				href='/profiles'
				className='btn btn-light my-1'>
				Go Back
			</Link>

			<div className='profile bg-light p-4 my-4'>
				<div className='flex items-center gap-4'>
					<Image
						className='round-img'
						src={profileDetail.user?.avatar ?? imageHolder}
						alt={profileDetail.user?.name || 'avatar'}
						width={80}
						height={80}
					/>
					<div>
						<h1 className='text-2xl font-bold capitalize'>
							{profileDetail.user?.name}
						</h1>
						<p className='text-sm'>{profileDetail.company}</p>
						<p className='text-sm'>{profileDetail.location}</p>
						{profile?.user._id === id && (
							<Link
								href={`/profile-form`}
								className='btn btn-primary mt-2'>
								Edit Profile
							</Link>
						)}
					</div>
				</div>

				{profileDetail.bio && (
					<div className='my-4'>
						<h3 className='font-bold'>Bio</h3>
						<p>{profileDetail.bio}</p>
					</div>
				)}

				{profileDetail.experience?.length > 0 && (
					<div className='my-4'>
						<h3 className='font-bold'>Experience</h3>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>Company</th>
									<th className='hide-sm'>Title</th>
									<th className='hide-sm'>Years</th>
								</tr>
							</thead>
							<tbody>
								{profileDetail.experience.map((exp) => (
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
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{profileDetail.education?.length > 0 && (
					<div className='my-4'>
						<h3 className='font-bold'>Education</h3>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>School</th>
									<th className='hide-sm'>Degree</th>
									<th className='hide-sm'>Years</th>
								</tr>
							</thead>
							<tbody>
								{profileDetail.education.map((edu) => (
									<tr key={edu._id}>
										<td>{edu.school}</td>
										<td className='hide-sm'>{edu.degree}</td>
										<td className='hide-sm'>
											{edu.current
												? `${format(edu.from, 'dd,MMMM,yyyy')} - currently`
												: `${format(edu.from, 'dd,MMMM,yyyy')} - ${format(
														edu.to,
														'dd,MMMM,yyyy'
												  )}`}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{profileDetail.skills?.length > 0 && (
					<div className='my-4'>
						<h3 className='font-bold'>Skills</h3>
						<ul className='grid grid-cols-2 gap-2'>
							{profileDetail.skills.map((s, i) => (
								<li
									key={i}
									className='text-primary flex items-center gap-2'>
									<FaCheck /> {s}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
				{repos.length > 0 && (
					<div className='profile-github'>
						<h2 className='text-primary my-4'>GitHub Repositories</h2>
						{repos.map((repo) => (
							<div
								key={repo.id}
								className='repo bg-white p-4 mb-4 rounded border border-gray-200'>
								<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
									<div className='flex-1'>
										<h4 className='text-lg font-semibold'>
											<a
												href={repo.url}
												target='_blank'
												rel='noopener noreferrer'
												className='text-primary'>
												{repo.name}
											</a>
										</h4>
										<p className='text-gray-600 mt-1'>{repo.description}</p>
									</div>
									<div className='mt-2 md:mt-0'>
										<div className='flex gap-3'>
											<span className='badge badge-light'>
												Stars: {repo.stars}
											</span>
											<span className='badge badge-dark'>
												Forks: {repo.forks}
											</span>
											<span className='badge badge-primary'>
												Issues: {repo.issues}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
		</section>
	);
}
