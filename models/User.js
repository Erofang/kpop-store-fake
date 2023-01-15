const db = require('../database');




//sql na vložení do db
exports.register =  (role, name, tel, email, hashedPassword, adress) => {
    let sql = `INSERT INTO zakaznici(id_role, jmeno, telefon, email, heslo, adresa) VALUES ('${role}', '${name}', '${tel}','${email}','${hashedPassword}', '${adress}')`;
    db.query(sql, err => {
        if (err) throw err;
    })  
};

exports.userProfile =  (id) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT * FROM zakaznici WHERE id_zak = ${id}`;
			console.log(id)
            db.query(sql, id, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
}

exports.editUserProfile = (name, email, tel, adress, id) => {
	return new Promise((resolve, reject) => {
		try {  let sql = `UPDATE zakaznici SET jmeno = '${name}', email = '${email}', telefon = '${tel}', adresa = '${adress}'  WHERE id_zak = '${id}'`;
		db.query(sql, (err) => {
			if (err) throw err;
			resolve(true);
		});
	} catch (err) {
		reject(err);
		}
	});
};


exports.editUserPassword = (hashedPassword, id) => {
	return new Promise((resolve, reject) => {
		try {  let sql = `UPDATE zakaznici SET  heslo = '${hashedPassword}'  WHERE id_zak = '${id}'`;
		db.query(sql, (err) => {
			if (err) throw err;
			resolve(true);
		});
	} catch (err) {
		reject(err);
		}
	});
};