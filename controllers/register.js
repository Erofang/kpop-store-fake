const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('register/register', {
        title: 'Register',
        style: 'register.css'
    })
})



module.exports = router;