const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
    res.render('homePage', {
        title: 'Kpop-card-store',
        style: 'homePage.css'
    })
})












module.exports = router;