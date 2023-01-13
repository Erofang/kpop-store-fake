const express = require('express');
const router = express.Router();
const Products = require('../models/Products');


router.get('/', (req, res) => {
    res.render('admin/admin', {
        title: 'Admin',
        style: 'admin/adminHome.css'
    })
})


router.get('/addCard', (req, res) =>{
    res.render('admin/addCard', {
        title: 'Add Card',
        style: 'admin/addCard.css'
    })
})


router.post('/addCard', (req, res) =>{
    try {
        const {id_clena, price, image} = req.body;
        console.log(req.body);
        Products.addCard(id_clena, price, image);
        res.redirect('/admin');
    } catch {
        res.redirect('/admin/addCard');
    }
});

router.get('/edit/:id', async (req, res) => {
    let id = req.params.id;
    const data = await Products.showEditCard(id);
    console.log(data);
    res.render('admin/editCard')
})


module.exports = router;