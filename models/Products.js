const db = require('../database');



exports.ShowMembers = () => {
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