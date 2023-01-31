const db = require('../database');



exports.showMembers = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT produkty.cena, produkty.image, cleni.id_clena, cleni.id_skup, cleni.jmeno, skupiny.jmeno_skup FROM cleni INNER JOIN skupiny ON cleni.id_skup = skupiny.id_skup
            JOIN produkty ON produkty.id_clena = cleni.id_clena;`
            db.query(sql, (err, results) => {
                if (err) throw err;
                resolve(results);
            })
        } catch (err) {
            reject(err);
        }
    })
}

exports.showTwice = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT produkty.id_pro, produkty.cena, produkty.image, cleni.id_clena, cleni.id_skup, cleni.jmeno, skupiny.jmeno_skup FROM cleni INNER JOIN skupiny ON cleni.id_skup = skupiny.id_skup JOIN produkty ON produkty.id_clena = cleni.id_clena AND skupiny.id_skup = 1;`
            db.query(sql, (err, results) => {
                if (err) throw err;
                resolve(results);
            })
        } catch (err) {
            reject(err);
        }
    })
}

exports.showAespa = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT produkty.id_pro, produkty.cena, produkty.image, cleni.id_clena, cleni.id_skup, cleni.jmeno, skupiny.jmeno_skup FROM cleni INNER JOIN skupiny ON cleni.id_skup = skupiny.id_skup JOIN produkty ON produkty.id_clena = cleni.id_clena AND skupiny.id_skup = 2;`
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

exports.editCard =  (id, price, id_clena) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `UPDATE produkty SET id_clena = '${id_clena}', cena = '${price}' WHERE id_pro = '${id}'`;
            db.query(sql, (err) => {
                if (err) throw err;
                resolve(true);
            });
        } catch (err) {
            reject(err);
        }
    })
}

