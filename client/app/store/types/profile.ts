import {User} from './auth'

export interface Experience {
	_id: string;
	title: string;
	company: string;
	location: string;
	from: Date | string;
	to: Date | string;
	current: boolean;
	description: string;
}

export interface Education {
	_id: string;
	school: string;
	degree: string;
	fieldofstudy: string;
	from: Date | string;
	to: Date | string;
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

export interface Repos {
	id:string;
	name:string;
	full_name:string;
	description:string;
	url:string;
	homepage:string;
	stars:string;
	forks:string;
	issues:string;
	created_at:string;
	updated_at:string;
	topics:string;
	fork:string;
	private:string;
	license:string;
}

export const ProfileState = {
	profile: null as Profile | null,
	profiles: [] as Profile[],
	profileDetail: null as Profile | null,
	repos: [] as Repos[],
	isLoading: false,
	error: null as string | null,
};
