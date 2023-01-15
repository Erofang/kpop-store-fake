const express = require('express');
const dotenv = require('dotenv').config({path:'./.env'});
const bcrypt = require('bcrypt');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('register/register', {
        title: 'Register',
        style: 'register.css'
    })
})


router.post('/', async (req, res) => {

    const output = `
    <p>Ověření registrace</p>
    Klidněte <a href = "http://localhost:5555/login">zde</a>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.seznam.cz",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Kpop Store" <KpopStore@seznam.cz>', // sender address
    to: `${req.body.email}`, 
    subject: "Registrace", 
    text: `Klidněte <a href = "http://localhost:5555/login">zde</a>`, 
    html: output, 
  });

    try {
        const {name, tel, email, password, adress} = req.body;
        console.log(req.body);
        const role = 2;
        const hashedPassword = await bcrypt.hash(password, 10);
        User.register(role, name, tel, email, hashedPassword, adress);
        res.redirect('/login');
    } catch  {
        res.redirect('/register');
    }
})



module.exports = router;