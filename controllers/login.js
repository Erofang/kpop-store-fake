const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const auth = require('./authentication');


router.get('/', (req, res) => {
    res.render('login/login', {
        title: 'Login',
        style: 'login.css'
    })
})

router.post('/',  passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: 'login',
	failureFlash: true
}))


module.exports = router;