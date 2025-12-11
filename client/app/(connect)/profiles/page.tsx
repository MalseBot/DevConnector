"use client";
import { useProfile } from '@/app/hooks/useProfile';
import Image from 'next/image';
import Link from 'next/link';
import imageHolder from '@/public/placeholder.jpg'

import { useEffect }  from 'react'
import { FaCheck, FaConnectdevelop } from 'react-icons/fa';

const Profiles = () => {
    const {getAllProfiles,profiles} = useProfile();
    useEffect(()=>{
        getAllProfiles();
    },[getAllProfiles])
  return (
		<section className='container-custom'>
			<h1 className='large text-primary'>Developers</h1>
			<p className='lead'>
				<FaConnectdevelop/> Browse and connect with developers
			</p>
			<div className='profiles'>
            {profiles.map((e)=>{
                
                return (
									<div
										className='profile bg-light'
										key={e.user._id}>
										<Image
											className='round-img'
											src={e.user.avatar ? e.user.avatar : imageHolder}
											alt='user avatar'
											width={25}
											height={25}
										/>
										<div>
											<h2 className='text-3xl capitalize'>{e.user.name}</h2>
											<p>{e.company}</p>
											<p>{e.location}</p>
											<Link
												href={`/profile/${e.user._id}`}
												className='btn btn-primary w-fit'>
												View Profile
											</Link>
										</div>
										<ul>
											{e.skills.slice(0, 4).map((skill, index) => (
												<li
													className='text-primary flex items-center gap-1'
													key={index}>
													<FaCheck /> {skill}
												</li>
											))}
										</ul>
									</div>
								);})}
			</div>
		</section>
	);
}

export default Profiles