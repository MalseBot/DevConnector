/** @format */

import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL, // http://localhost:5000/api
	headers: {
		'Content-Type': 'application/json',
	},
});

// Add request interceptor to attach the current token from localStorage on every request
if (typeof window !== 'undefined') {
	api.interceptors.request.use(
		(config) => {
			const token = localStorage.getItem('token');
			if (token && config.headers) {
				// attach token in both common patterns to be safe
				config.headers['x-auth-token'] = token;
				config.headers['Authorization'] = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);
}

export default api;
