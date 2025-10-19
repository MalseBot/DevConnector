/** @format */

const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

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
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send('User registered');
	}
);

module.exports = router;
