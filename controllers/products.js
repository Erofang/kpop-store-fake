const express = require('express');
const router = express.Router();
const Products = require('../models/Products');




router.get('/', async (req, res) => {
    const data = await Products.showMembers();
    res.render('products/products', {
        title: 'Cards', 
        style: 'homePage.css',
        cards: data
    })
})

router.get('/Twice', async (req, res) => {
    const data = await Products.showTwice();
    res.render('products/productsTwice', {
        title: ' Twice Cards',
        style: 'homePage.css',
        cards: data 
    })
})

router.get('/aespa', async (req, res) => {
    const data = await Products.showAespa();
    res.render('products/productsAespa', {
        title: ' aespa Cards',
        style: 'homePage.css',
        cards: data 
    })
})



module.exports = router;