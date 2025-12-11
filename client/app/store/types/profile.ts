import {User} from './auth'

export interface Experience {
	_id: string;
	title: string;
	company: string;
	location: string;
	from: Date;
	to: Date;
	current: boolean;
	description: string;
}

export interface Education {
	_id: string;
	school: string;
	degree: string;
	fieldofstudy: string;
	from: Date;
	to: Date;
	current: boolean;
	description: string;
}

export interface Social {
	youtube?: string;
	twitter?: string;
	facebook?: string;
	linkedin?: string;
	instagram?: string;
}

export interface Profile {
	user: User;
	company: string;
	website: string;
	location: string;
	status: string;
	skills: [string];
	bio: string;
	githubusername: string;
	experience: Experience[];
	education: Education[];
	social: Social;
	date: Date;
}

export interface ProfileCU {
	company: string;
	website: string;
	location: string;
	status: string;
	skills: string;
	bio: string;
	githubusername: string;
	date: Date;
}

export const ProfileState = {
	profile: null as Profile | null,
	profiles: [] as Profile[],
	profileDetail: null as Profile | null,
	repos: [],
	isLoading: false,
	error: null as string | null,
};