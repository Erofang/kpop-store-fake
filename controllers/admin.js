const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('admin/admin', {
        title: 'Admin',
        style: 'admin/adminHome.css'
    })
})



module.exports = router;