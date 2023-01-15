const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const multer = require('multer');


router.get('/', async (req, res) => {
    const id = req.user.id_zak;
    let data = await User.userProfile(id)
    res.render('profile/profile', {
        title: 'Profil',
        style: 'profile/profileHome.css',
        profile: data[0],
    })
});






module.exports = router;