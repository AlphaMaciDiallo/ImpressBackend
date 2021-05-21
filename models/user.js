const db = require('../util/database');

module.exports = class User {
    constructor(Name, email, password) {
        this.Name = Name;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.query(`SELECT password, Name FROM user WHERE email = ?`, [email]);

    }
    static save(User) {
        return db.query(
            `INSERT INTO user (Name, email, password) VALUES (?, ? ,?)`, [User.Name, User.email, User.password]
        );
    }

    static getCategory() {
        return db.query(`SELECT * FROM 	category `);
    }

    static getSubCategory(id) {
        return db.query(`SELECT * FROM 	subcategory  WHERE 	idCategory = ?`, [id]);
    }

}