
export interface Comment {
	id: string;
	user: string;
	text: string;
	name: string;
	avatar: string;
	date: string;
}

export interface Like {
	_id:string,
	user:string
}

export interface Post {
	_id: string;
	user: string;
	text: string;
	name: string;
	avatar: string;
	like: Like[];
	comment: Comment[];
	date: string;
}

export interface PostState {
	posts: Post[];
	post: Post | null;
	postById:Post|null;
	isLoading: boolean;
	error: string | null;
}
export const initialPostState: PostState = {
    post: null,
    posts: [],
	postById:null,
    isLoading: false,
    error: null,
};