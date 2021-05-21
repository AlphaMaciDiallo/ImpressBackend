const db = require('../util/database');

module.exports = class User {
    constructor(amount, startD, endD, userName) {
        this.amount = amount;
        this.startD = startD;
        this.endD = endD;
        this.userName = userName;
    }

    static findImpress(id) {
            return db.query(`SELECT * FROM impress WHERE id = ?`, [id]);

        }
        //order by id desc
    static getAllImpress() {
        return db.query(`SELECT * FROM impress  `);
    }

    static deleteImpress(id) {
        return db.query(`Delete  FROM impress WHERE id = ?`, [id]);
    }

    static save(Impress) {
        return db.query(
            `
                        INSERT INTO impress(amount, startD, endD, userName , permit) VALUES( ? , ? , ? , ?, ? )
                        `, [Impress.amount, Impress.startD, Impress.endD, Impress.userName, Impress.permit]
        );
    }

    static editImp(Impress) {
        return db.query(
            `
                        UPDATE impress set amount=?, startD=?, endD=?, userName=? WHERE id = ?
                        `, [Impress.amount, Impress.startD, Impress.endD, Impress.userName, Impress.id]
        );
    }

    static udpatePermission(val, id) {
        return db.query(
            ` UPDATE impress set permit=? WHERE id = ?`, [val, id]
        );
    }

    static getTotalmpress() {
        return db.query(`SELECT Sum(amount) FROM impress`);
    }

    //asc
    static getAllImpressbyDesc() {
        return db.query(`SELECT * FROM impress order by startD desc`); //, [val]);
    }

    static getAllImpressbyAsc() {
        return db.query(`SELECT * FROM impress order by startD asc`); //, [val]);
    }
}