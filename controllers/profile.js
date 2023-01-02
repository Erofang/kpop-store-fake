const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('profile/profile', {
        title: 'Profile Page',
        style: 'profile/profileHome.css'
    })
})






module.exports = router;