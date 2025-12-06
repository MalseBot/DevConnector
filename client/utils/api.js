/** @format */

import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL, // http://localhost:5000/api
	headers: {
		'Content-Type': 'application/json',
		'x-auth-token': typeof window !== 'undefined' && localStorage.getItem('token') || '',
	},

});



export default api;
