const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('register/register', {
        title: 'Register',
        style: 'register.css'
    })
})


router.post('/', async (req, res) => {
    try {
        const {name, surname, tel, email, password} = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        User.register(name, surname, tel, email, hashedPassword);
        res.redirect('/login');
    } catch  {
        res.redirect('/');
    }
})



module.exports = router;