const db = require('../database');



exports.showMembers = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT cleni.id_clena, cleni.id_skup, cleni.jmeno, skupiny.jmeno_skup FROM cleni INNER JOIN skupiny ON cleni.id_skup = skupiny.id_skup;`
            db.query(sql, (err, results) => {
                if (err) throw err;
                resolve(results);
            })
        } catch (err) {
            reject(err);
        }
    })
}

exports.addCard = (id_clena, price, image) => {
    let sql = `INSERT INTO produkty(id_clena, cena, image) VALUES ('${id_clena}', '${price}', '${image}')`
    db.query(sql, (err) => {
        if (err) throw err;
    })
}

exports.showEditCard = (id) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT * FROM produkty WHERE id_pro = ?`
            db.query(sql, id, (err, results) => {
                if (err) throw err;
                resolve(results);
            })
        } catch (err) {
            reject(err);
        }
    })
}

exports.editProduct =  (id_clena, price, image, id) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `UPDATE produkty SET id_clena = '${id_clena}', cena = '${price}', image = '${image}' WHERE id_vyr = '${id}'`
        } catch (err) {
            reject(err);
        }
    })
}

