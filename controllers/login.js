const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('login/login', {
        title: 'Login',
        style: 'login.css'
    })
})




module.exports = router;