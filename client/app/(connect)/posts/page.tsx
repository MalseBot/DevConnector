/** @format */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import PicPlaceholder from '@/public/placeholder.jpg';
import { FaThumbsUp, FaTimes } from 'react-icons/fa';
import { usePost } from '@/app/hooks/usePost';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import { format } from 'date-fns';
import { Like, Post } from '@/app/store/types/post';
export default function Posts() {
	const {
		getPosts,
		posts,
		postsLoading,
		createPost,
		deletePost,
		addComment,
		unlikePost,
		likePost,
	} = usePost();
	const { user } = useAuth();
	const [postText, setPostText] = useState('');
	const [commentText, setCommentText] = useState<Record<string, string>>({});
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	const handleCreatePost = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!postText.trim()) return;
		await createPost(postText);
		setPostText('');
	};

	const handleAddComment = async (postId: string) => {
		const text = commentText[postId];
		if (!text?.trim()) return;
		await addComment(postId, text);
		setCommentText({ ...commentText, [postId]: '' });
	};

	const isLiked = (post: Post) =>
		post.like?.some((l:Like) => l.user?.toString() === user?._id) || false;

	return (
		<section className='container-custom'>
			<h1 className='large text-primary'>Posts</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome to the community!
			</p>

			{/* Create Post Form */}
			<div className='post-form'>
				<div className='bg-primary p'>
					<h3>Say Something...</h3>
				</div>
				<form
					className='form my-1'
					onSubmit={handleCreatePost}>
					<textarea
						name='text'
						cols={30}
						rows={5}
						placeholder='Create a post'
						value={postText}
						onChange={(e) => setPostText(e.target.value)}
						required
					/>
					<input
						type='submit'
						className='btn btn-dark my-1'
						value={postsLoading ? 'Submitting...' : 'Submit'}
						disabled={postsLoading}
					/>
				</form>
			</div>

			{/* Posts List */}
			<div className='posts'>
				{posts.length === 0 ? (
					<p className='text-center my-4'>
						No posts yet. Be the first to post!
					</p>
				) : (
					posts.map((post) => {
						return (
							<div
								key={post._id}
								className='post bg-white p-1 my-1'>
								<div>
									<Link
										href={`/profile/${post.user}`}
										className='flex flex-col items-center justify-between'>
										<Image
											className='round-img'
											src={post.avatar || PicPlaceholder}
											alt='user avatar'
											width={50}
											height={50}
										/>
										<h4>{post.name}</h4>
									</Link>
								</div>
								<div>
									<p className='my-1'>{post.text}</p>
									<p className='post-date'>
										{format(new Date(post.date), 'MMM dd, yyyy')}
									</p>
									<div className='flex gap-2'>
										<button
											type='button'
											className='btn btn-light'
											onClick={() =>
												isLiked(post)
													? unlikePost(post._id)
													: likePost(post._id)
											}>
											<FaThumbsUp
												className={isLiked(post) ? 'text-blue-500' : ''}
											/>
											<span>{post.like?.length || 0}</span>
										</button>
										<Link
											href={`/post/${post._id}`}
											className='btn btn-primary'>
											Discussion{' '}
											<span className='comment-count'>
												{post.comment?.length}
											</span>
										</Link>
										{post.user === user?._id && (
											<button
												type='button'
												className='btn btn-danger'
												onClick={() => deletePost(post._id)}>
												<FaTimes />
											</button>
										)}
									</div>

									{/* Comments Section */}
									{post.comment && post.comment.length > 0 && (
										<div className='comments mt-2'>
											<h5>Comments:</h5>
											{post.comment.slice(0, 2).map((comment) => (
												<div
													key={comment.id}
													className='comment p-1 my-1 bg-gray-100'>
													<p className='text-sm font-bold'>{comment.name}</p>
													<p className='text-sm'>{comment.text}</p>
													<p className='text-xs text-gray-500'>
														{format(new Date(comment.date), 'MMM dd, yyyy')}
													</p>
												</div>
											))}
											{post.comment.length > 2 && (
												<Link
													href={`/post/${post._id}`}
													className='text-primary text-sm'>
													View all {post.comment.length} comments
												</Link>
											)}
										</div>
									)}

									{/* Add Comment Form */}
									<form
										className='my-2'
										onSubmit={(e) => {
											e.preventDefault();
											handleAddComment(post._id);
										}}>
										<input
											type='text'
											placeholder='Add a comment...'
											value={commentText[post._id] || ''}
											onChange={(e) =>
												setCommentText({
													...commentText,
													[post._id]: e.target.value,
												})
											}
											className='w-full p-2 border rounded'
										/>
										<button
											type='submit'
											className='btn btn-primary my-1'>
											Comment
										</button>
									</form>
								</div>
							</div>
						);
					})
				)}
			</div>
		</section>
	);
}
