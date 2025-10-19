const express = require('express');
const Router = express.Router();

// @route    GET api/auth
// @desc     Test route
// @access   Public
Router.get('/', (req, res) => res.send('Auth Route'));

module.exports = Router;