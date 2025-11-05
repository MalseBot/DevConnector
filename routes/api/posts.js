/** @format */

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    POST api/Posts
// @desc     Create a Post
// @access   Private
router.post(
	'/',
	[auth, [check('text', 'Text is Required').notEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		try {
			const user = await User.findById(req.user.id).select('-password');

			const newPost = new Post({
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			const post = await newPost.save();
			res.json(post);
		} catch (error) {
			console.log(error.message);
			res.status(500).send('SERVER ERROR');
		}
	}
);

// @route    GET api/Posts
// @desc     get all Post
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const Posts = await Post.find().sort('asc');

		res.json(Posts);
	} catch (error) {
		console.error(error.message);
		res.status(400).send('Server Error');
	}
});

// @route    GET api/Posts/:id
// @desc     get Post by id
// @access   Private
router.get('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) return res.status(404).send('Post not found');
		res.json(post);
	} catch (error) {
		console.error(error.message);
		if (error.kind === 'ObjectId')
			return res.status(404).send('Post not found');
		res.status(400).send('Server Error');
	}
});

// @route    DELETE api/Posts/:id
// @desc     Delete post
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) return res.status(404).send('Post not found');

		if (post.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'User not authorized' });

		await post.deleteOne();

		res.json({ msg: 'post Deleted' });
	} catch (error) {
		console.error(error.message);

		if (error.kind === 'ObjectId')
			return res.status(404).send('Post not found');

		res.status(400).send('Server Error');
	}
});

module.exports = router;
