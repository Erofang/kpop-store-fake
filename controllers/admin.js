const express = require('express');
const router = express.Router();


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
        
    } catch {
        throw err;
    }
})


module.exports = router;