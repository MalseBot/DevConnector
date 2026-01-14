/** @format */

const express = require('express');
const config = require('config');
const request = require('request');
const router = express.Router();
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
// @route    GET api/Profile/me
// @desc     get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			'user',
			['name', 'avatar']
		);
		if (!profile) {
			return res.status(400).json({ msg: 'there is no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/Profiles
// @desc     Create or update user profile
// @access   Private

router.post(
	'/',
	auth,
	[
		check('skills', 'Skills is required').notEmpty(),
		check('status', 'Status is required ').notEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			status,
			company,
			website,
			location,
			bio,
			githubusername,
			skills,
			youtube,
			facebook,
			twitter,
			instagram,
			linkedin,
		} = req.body;
		// Build profile object
		const profileFields = {};
		profileFields.user = req.user.id;
		if (company) profileFields.company = company;
		else profileFields.company = '';
		if (website) profileFields.website = website;
		else profileFields.website = '';
		if (location) profileFields.location = location;
		else profileFields.location = '';
		if (bio) profileFields.bio = bio;
		else profileFields.bio = '';
		if (status) profileFields.status = status;
		else profileFields.status = '';
		if (githubusername) profileFields.githubusername = githubusername;
		else profileFields.githubusername = '';
		if (skills) profileFields.skills = skills.split(',').map((skill) => skill.trim());
		else profileFields.skills = [];
		// Build social object
		profileFields.social = {};
		if (youtube) profileFields.social.youtube = youtube;
		else profileFields.social.youtube = '';
		if (twitter) profileFields.social.twitter = twitter;
		else profileFields.social.twitter = '';
		if (facebook) profileFields.social.facebook = facebook;
		else profileFields.social.facebook = '';
		if (linkedin) profileFields.social.linkedin = linkedin;
		else profileFields.social.linkedin = '';
		if (instagram) profileFields.social.instagram = instagram;
		else profileFields.social.instagram = '';

		try {
			let profile = await Profile.findOne({ user: req.user.id });
			if (profile) {
				// Update
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				);
				return res.json(profile);
			}
			// Create
			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/Profile
// @desc     Get all profiles
// @access   Public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', ['name', 'avatar']);
		res.json(profiles);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/Profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public

router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate('user', ['name', 'avatar']);

		if (!profile) {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.json(profile);
	} catch (error) {
		console.error(error.message);
		if (error.kind == 'ObjectId')
			return res.status(400).json({ msg: 'Profile not found' });
		res.status(500).send('Server Error');
	}
});

// @route    delete api/Profile
// @desc     delete profile and user by token
// @access   Private

router.delete('/', auth, async (req, res) => {
	try {
		await Profile.findOneAndDelete({
			user: req.user.id,
		});
		await User.findOneAndDelete({ _id: req.user.id });
		res.json({ msg: 'User deleted' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route    PuT api/Profile/experience
// @desc     add Experience
// @access   Private

router.put(
	'/experience',
	[
		auth,
		[
			check('title', 'Title is required').notEmpty(),
			check('company', 'Company is required').notEmpty(),
			check('from', 'The starting date is required').notEmpty(),
		],
	],
	async (req, res) => {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			return res.status(400).json({ error: error.array() });
		}

		const { title, company, description, from, to, current, location } =
			req.body;
		const newExp = { title, company, description, from, to, current, location };
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			if (!profile) {
				return res.status(400).json({ msg: 'Profile not found' });
			}

			profile.experience.unshift(newExp);

			await profile.save();
			res.json(profile);
		} catch (error) {
			console.log(error.message);

			res.status(500).send('Server Error');
		}
	}
);

// @route    Delete api/Profile/experience
// @desc     Delete Experience by its id
// @access   Private

router.delete('/experience/:exp_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		await profile.experience.id(req.params.exp_id).deleteOne();
		await profile.save();
		res.send(profile);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
});

// @route    PuT api/Profile/education
// @desc     add Education
// @access   Private

router.put(
	'/education',
	[
		auth,
		[
			check('school', 'School name is required').notEmpty(),
			check('degree', 'The degree is required').notEmpty(),
			check('fieldofstudy', 'Field of study is Required').notEmpty(),
			check('from', 'The starting date is required').notEmpty(),
		],
	],
	async (req, res) => {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			return res.status(400).json({ error: error.array() });
		}

		const {
			school,
			degree,
			fieldofstudy,
			description,
			from,
			to,
			current,
			location,
		} = req.body;
		const newEdu = {
			school,
			degree,
			fieldofstudy,
			description,
			from,
			to,
			current,
			location,
		};
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			if (!profile) {
				return res.status(400).json({ msg: 'Profile not found' });
			}

			profile.education.unshift(newEdu);

			await profile.save();
			res.json(profile);
		} catch (error) {
			console.log(error.message);

			res.status(500).send('Server Error');
		}
	}
);

// @route    Delete api/Profile/education
// @desc     Delete Education by its id
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		await profile.education.id(req.params.edu_id).deleteOne();
		await profile.save();
		res.send(profile);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
});

// @route    Get /github/:username
// @desc     get github repos
// @access   Public

router.get('/github/:username', (req, res) => {
	try {
		const options = {
			uri: `https://api.github.com/users/${req.params.username}/repos`,
			qs: {
				per_page: 5,
				sort: 'created',
				direction: 'dsc',
				client_id: config.get('githubClientID'),
				client_secret: config.get('githubClientSecret'),
			},
			method: 'GET',
			headers: { 'user-agent': 'node.js' },
		};
		request(options, (error, response, body) => {
			if (error) {
				return res.status(500).json({ msg: 'Error fetching GitHub profile' });
			}

			if (response.statusCode !== 200) {
				return res.status(404).json({ msg: 'No GitHub profile found' });
			}

			res.json(JSON.parse(body).map(repo => ({
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description || 'No description',
            url: repo.html_url,
            homepage: repo.homepage || null,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            issues: repo.open_issues_count,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            topics: repo.topics || [],
            fork: repo.fork,
            private: repo.private,
            license: repo.license?.name || null
        })));
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
