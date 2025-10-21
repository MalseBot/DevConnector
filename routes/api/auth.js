const express = require('express');
const auth = require('../../middleware/auth');
const Router = express.Router();
const User = require('../../models/User');
// @route    GET api/auth
// @desc     Test route
// @access   Public
Router.get('/',auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).send('Server Error here');
    }
});

module.exports = Router;