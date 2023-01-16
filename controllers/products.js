const express = require('express');
const router = express.Router();
const Products = require('../models/Products');




router.get('/', async (req, res) => {
    const data = await Products.showMembers();
    res.render('products/products', {
        title: 'Cards', 
        style: 'products.css',
        cards: data
    })
})



module.exports = router;