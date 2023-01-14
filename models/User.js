const db = require('../database');




//sql na vložení do db
exports.register =  (role, name, tel, email, hashedPassword, adress) => {
    let sql = `INSERT INTO zakaznici(id_role, jmeno, telefon, email, heslo, adresa) VALUES ('${role}', '${name}', '${tel}','${email}','${hashedPassword}', '${adress}')`;
    db.query(sql, err => {
        if (err) throw err;
    })  
};

exports.login = () => {
    
}