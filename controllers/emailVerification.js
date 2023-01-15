const express = require('express');
const router = express.Router();





router.get('/', (req, res) => {
    res.render('emailVerification/emailVerification', {
        title: 'emailVerification',
        style: 'emailVerification.css'
    })
})





module.exports = router;