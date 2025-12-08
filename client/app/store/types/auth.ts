export interface User {
	id: string;
	name: string;
	email: string;
	avatar: string;
}

export interface AuthUser {
	id: string;
	name: string;
	email: string;
	token: string;
}

export interface RegisterUser {
	name: string;
	email: string;
	password: string;
}

export interface RegisterState {
    user: AuthUser | null;
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface LoginState {
	user: AuthUser | null;
	isLoading: boolean;
	error: string | null;
	isAuthenticated: boolean;
}