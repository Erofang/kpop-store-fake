const mysql = require('mysql');
//Připojení na db

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kpop-store'
});

db.connect(function (err){
    if (err) throw err;
    console.log('databáze je připojena');
});



module.exports = db;