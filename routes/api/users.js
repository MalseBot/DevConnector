/** @format */

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

const User = require('../../models/User');
// @route    post api/users
// @desc     register route
// @access   Public
router.post(
	'/',
	[
		check('name', 'name is required').not().isEmpty(),
		check('email', 'Please enter a valid email').isEmail(),
		check(
			'password',
			'Please enter a strong password with 8+ Characters'
		).isLength({ min: 8 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			// See if user exists
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// Get users gravatar
			const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
			user = new User({
				name,
				email,
				avatar,
				password,
			});

			// Encrypt password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			const payload = {
				user: { id: user.id },
			}

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
			
			await user.save();
			res.send('User registered');
		} catch (error) {
			console.error(error.message);

			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
