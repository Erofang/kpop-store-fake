const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Products = require('../models/Products');


router.get('/', (req, res) => {
    res.render('admin/admin', {
        title: 'Admin',
        style: 'admin/adminHome.css'
    })
})


router.get('/addCard', async (req, res) =>{
    const data = await Products.showMembers();
    res.render('admin/addCard', {
        title: 'Add Card',
        style: 'admin/addCard.css',
        cards: data
    })
})


/* router.post('/addCard', (req, res) =>{
    try {
        const {id_clena, price, image} = req.body;
        console.log(req.body);
        Products.addCard(id_clena, price, image);
        res.redirect('/admin');
    } catch {
        res.redirect('/admin/addCard');
    }
}); */

// Multer Middleware
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/productsImage');
	},

	filename: (req, file, cb) => {
		console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

router.post('/addCard', upload.single('image') ,async (req, res) => {
    if (!req.file) {
        console.log('no file found')
    } else {
        console.log(req.file.filename)
        const {id_clena, price} = req.body;
        const image = req.file.filename;
        await Products.addCard( id_clena, price, image);
        res.redirect('/admin')
    }
})

router.get('/edit/:id', async (req, res) => {
    let id = req.params.id;
    const data = await Products.showEditCard(id);
    console.log(data);
    res.render('admin/editCard')
})


module.exports = router;