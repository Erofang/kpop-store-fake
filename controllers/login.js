const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const conn = require('../database');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const auth = require('./authentication');




function chceckNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {  
	 return res.redirect('/');
    }
    next();
}


//login page
router.get('/',  (req, res) => {
    res.render('login/login', {
        title: 'Přihlášení',
        style: 'homePage.css',
		message: req.flash('error')
    })
})


//poslaní formu na login page
router.post('/',  passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: 'login',
	failureFlash: true
}))



module.exports = router;