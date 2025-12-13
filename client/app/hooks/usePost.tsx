/** @format */

import { getErrorMessage } from "@/errorHandler";
import { addAlert } from "../store/slices/alertSlice";
import { addComment, createPost, deleteComment, deletePost, getPostById, getPosts, likePost, unlikePost } from "../store/slices/postSlice";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const usePost = () => {
	const dispatch = useAppDispatch();
	const postState = useAppSelector((state) => state.posts);

	const fetchPosts = useCallback(async () => {
		try {
			await dispatch(getPosts()).unwrap();
		} catch (error: unknown) {
			dispatch(
				addAlert({
					id: `${Date.now()}`,
					type: 'error',
					message: getErrorMessage(error),
					duration: 5000,
				})
			);
		}
	}, [dispatch]);

	const fetchPostById = useCallback(async (e:string) => {
		try {
			await dispatch(getPostById(e)).unwrap();
		} catch (error: unknown) {
			console.log(error);
		}
	}, [dispatch]);

	const createNewPost = useCallback(
		async (text: string) => {
			try {
				await dispatch(createPost(text)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Post created successfully',
						duration: 3000,
					})
				);
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	const removePost = useCallback(
		async (postId: string) => {
			try {
				await dispatch(deletePost(postId)).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Post deleted',
						duration: 3000,
					})
				);
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	const unLikePost = useCallback(
		async (postId: string) => {
			try {
				await dispatch(unlikePost(postId)).unwrap();
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	const LikePost = useCallback(
		async (postId: string) => {
			try {
				await dispatch(likePost(postId)).unwrap();
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	const addNewComment = useCallback(
		async (postId: string, text: string) => {
			try {
				await dispatch(addComment({ postId, text })).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Comment added',
						duration: 3000,
					})
				);
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	const removeComment = useCallback(
		async (postId: string, commentId: string) => {
			try {
				await dispatch(deleteComment({ postId, commentId })).unwrap();
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'success',
						message: 'Comment deleted',
						duration: 3000,
					})
				);
			} catch (error: unknown) {
				dispatch(
					addAlert({
						id: `${Date.now()}`,
						type: 'error',
						message: getErrorMessage(error),
						duration: 5000,
					})
				);
			}
		},
		[dispatch]
	);

	return {
		posts: postState.posts,
		postById: postState.postById,
		postsLoading: postState.isLoading,
		postsError: postState.error,
		getPosts: fetchPosts,
		getPostById: fetchPostById,
		createPost: createNewPost,
		deletePost: removePost,
		likePost: (postId: string) => LikePost(postId),
		unlikePost: (postId: string) => unLikePost(postId),
		addComment: addNewComment,
		deleteComment: removeComment,
	};
};
