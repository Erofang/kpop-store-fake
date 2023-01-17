const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const multer = require('multer');


router.get('/', async (req, res) => {
    const id = req.user.id_zak;
    let data = await User.userProfile(id)
    res.render('profile/profile', {
        title: 'Profil',
        style: 'homePage.css',
        profile: data[0],
    })
});

router.post('/', async (req, res) => {
    const { name, email, tel, adress, id } = req.body;
	console.log(req.body);
    await User.editUserProfile( name, email, tel, adress, id );
	res.redirect('/profile')
});


router.get('/changingPassword', async (req, res) => {

    const output = `
    <p>Změna hesla</p>
    Klidněte <a href = "http://localhost:5555/profile/newPassword">zde</a>
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
    to: `${req.user.email}`, 
    subject: "Změna hesla", 
    text: `Klidněte <a href = "http://localhost:5555/profile/newPassword">zde</a>`, 
    html: output, 
  });

    res.render('profile/changingPassword', {
        title: 'Changing Password',
        style: 'profile/changingPassword.css',
    })
})


router.get('/newPassword', async (req, res) => {
    const id = req.user.id_zak;
    let data = await User.userProfile(id)
    res.render('profile/newPassword', {
        title: 'New password',
        style: 'profile/newPassword.css',
        profile: data[0],
    })
})

router.post('/newPassword', async (req, res) => {
    const { password, id } = req.body;
	console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.editUserPassword( hashedPassword, id );
    res.redirect('/profile');
})





module.exports = router;