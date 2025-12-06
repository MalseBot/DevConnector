const express = require('express');
const auth = require('../../middleware/auth');
const Router = express.Router();
const config = require('config');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
// @route    GET api/auth
// @desc     Test route
// @access   Public
Router.get('/',auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

Router.post(
    '/',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check(
            'password',
            'Password is required'
        ).exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {  email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'invalid Credintials' }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){  
                return res
                .status(400)
                .json({ errors: [{ msg: 'invalid Credintials' }] });
            }


            const payload = {
                user: { id: user.id },
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({token,user:{
                        id:user.id,
                        name:user.name,
                        email:user.email
                    } });
                }
            );
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
);

module.exports = Router;