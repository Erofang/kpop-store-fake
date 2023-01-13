const express = require('express');
const router = express.Router();
const Products = require('../models/Products');




router.get('/', async(req, res) => {
    const dataMembers = await Products.showMembers();
    res.render('homePage', {
        title: 'Kpop-card-store',
        style: 'homePage.css',
        Members: dataMembers
    })
})












module.exports = router;