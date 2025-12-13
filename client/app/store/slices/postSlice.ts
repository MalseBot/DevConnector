/** @format */

import { getErrorMessage } from "@/errorHandler";
import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialPostState, Post } from "../types/post";
const initialState = initialPostState;

export const getPosts = createAsyncThunk(
	'posts/getPosts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get('/posts');
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const getPostById = createAsyncThunk(
	'posts/getPostById',
	async (postId:string, { rejectWithValue }) => {
		try {
			const response = await api.get(`/posts/${postId}`);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const createPost = createAsyncThunk(
	'posts/createPost',
	async (text: string, { rejectWithValue }) => {
		try {
			const response = await api.post('/posts', { text });
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (postId: string, { rejectWithValue }) => {
		try {
			await api.delete(`/posts/${postId}`);
			return postId;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const likePost = createAsyncThunk(
	'posts/likePost',
	async (postId: string, { rejectWithValue }) => {
        try {			
			const response = await api.put(`/posts/like/${postId}`);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const unlikePost = createAsyncThunk(
	'posts/unlikePost',
	async (postId: string, { rejectWithValue }) => {
		try {
			const response = await api.put(`/posts/unlike/${postId}`);
			return response.data;
		} catch (error: unknown) {
            console.log(getErrorMessage(error));
            
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const addComment = createAsyncThunk(
	'posts/addComment',
	async (
		{ postId, text }: { postId: string; text: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await api.post(`/posts/comment/${postId}`, { text });
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const deleteComment = createAsyncThunk(
	'posts/deleteComment',
	async (
		{ postId, commentId }: { postId: string; commentId: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await api.delete(
				`/posts/comment/${postId}/${commentId}`
			);
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(getErrorMessage(error));
		}
	}
);

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		clearPost: (state) => {
			state.post = null;
			state.error = null;
		},
		clearError: (state) => {
			state.error = null;
		},
		clearPosts: (state) => {
			state.posts = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				// Normalize API response: like -> like, comment -> comments
				state.posts = action.payload.map((post: Post) => ({
					...post,
					like: post.like,
					comments: post.comment || [],
				}));
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getPostById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getPostById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.isLoading = false;
				// Normalize API response: like -> like, comment -> comments
				state.postById = action.payload;
			})
			.addCase(createPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts.unshift(action.payload);
			})
			.addCase(createPost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.posts = state.posts.filter((p) => p._id !== action.payload);
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.error = action.payload as string;
			})
			.addCase(likePost.fulfilled, (state, action) => {
				const idx = state.posts.findIndex((p) => p._id === action.payload._id);
				if (idx !== -1) {
					state.posts[idx] = {
						...action.payload,
						like: action.payload.like,
						comments: action.payload.comment || [],
					};
				}
			})
			.addCase(unlikePost.fulfilled, (state, action) => {
				const idx = state.posts.findIndex((p) => p._id === action.payload._id);
				if (idx !== -1) {
					state.posts[idx] = {
						...action.payload,
						like: action.payload.like,
						comments: action.payload.comment || [],
					};
				}
			})
			.addCase(addComment.fulfilled, (state, action) => {
				const idx = state.posts.findIndex((p) => p._id === action.payload._id);
				if (idx !== -1) {
					state.posts[idx] = {
						...action.payload,
						like: action.payload.like,
						comments: action.payload.comment || [],
					};
				}
			})
			.addCase(deleteComment.fulfilled, (state, action) => {
				const idx = state.posts.findIndex((p) => p._id === action.payload._id);
				if (idx !== -1) state.posts[idx] = action.payload;
			});
	},
});

export const { clearPost, clearError, clearPosts } = postSlice.actions;
export default postSlice.reducer;
