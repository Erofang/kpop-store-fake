const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Products = require('../models/Products');


router.get('/', async (req, res) => {
    const dataTwice = await Products.showTwice()
    const dataAespa = await Products.showAespa();
    res.render('admin/admin', {
        title: 'Admin',
        style: 'homePage.css',
        twice: dataTwice,
        aespa: dataAespa
    })
})


router.get('/addCard', async (req, res) =>{
    const data = await Products.showMembers();
    res.render('admin/addCard', {
        title: 'Add Card',
        style: 'homePage.css',
        cards: data
    })
})



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
    var id = req.params.id;
    const data = await Products.showEditCard(id);
    console.log(data);
    res.render('admin/editCard', {
        title: 'Edit Card',
        style: 'homePage.css',
        cards: data[0]
    });
})

router.post('/editCard', async (req, res) => {
    const { id, price, id_clena } = req.body;
    console.log(req.body);
    await Products.editCard(id, price, id_clena);
    res.redirect('/admin')
})


router.get('/deleteCard/:id', async (req, res) => {
    const id = req.params.id;
	await Products.deleteProduct(id, function (data) {
		res.redirect('/admin');
	});
	res.redirect('back');
});


module.exports = router;