const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

// @route    GET api/users
// @desc     Test route
// @access   Public
router.get('/api/users', async (req, res) => {
    try {
        const users = await users.find({});
        res.json(users);
    }catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

module.exports = router;