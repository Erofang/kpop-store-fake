const express = require('express');
const router = express.Router();
const methoOverride = require('method-override')
const Products = require('../models/Products');




router.get('/', async(req, res) => {
    const dataMembers = await Products.showMembers();
    res.render('homePage', {
        title: 'Kpop-card-store',
        style: 'homePage.css',
        Members: dataMembers
    })
})


//odhlášení ze sesion
/* router.delete('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
}) */

router.delete('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });












module.exports = router;