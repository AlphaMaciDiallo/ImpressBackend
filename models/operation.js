const db = require('../util/database');

module.exports = class User {
    constructor(description, category, sCategory, cost, dateIsuue, IssuedBy, receivedBy, idImprss) {
        this.description = description;
        this.category = category;
        this.sCategory = sCategory;
        this.cost = cost;
        this.dateIsuue = dateIsuue;
        this.IssuedBy = IssuedBy;
        this.receivedBy = receivedBy;
        this.idImprss = idImprss;
    }

    static findOperation(id) {
        return db.query(`SELECT * FROM operation WHERE idImprss = ?`, [id]);

    }
    static getAllOperation() {
        return db.query(`SELECT * FROM operation `);
    }

    static getAllOperaionTotal() {
            return db.query(`SELECT Sum(cost) FROM operation `);
        }
        //asc
    static getAllOperationbyDesc() {
        return db.query(`SELECT * FROM operation order by dateIsuue desc`); //, [val]);
    }

    static getAllOperationbyAsc() {
        return db.query(`SELECT * FROM operation order by dateIsuue asc`); //, [val]);
    }

    static deleteOperation(id) {
        return db.query(`Delete  FROM operation WHERE id = ?`, [id]);
    }

    static saveOperation(operation) {
        return db.query(
            `INSERT INTO operation (description, category, sCategory, cost, dateIsuue, IssuedBy, receivedBy, idImprss) VALUES(?,?,?,?,?,?,?,?)
                        `, [operation.description, operation.category, operation.sCategory, operation.cost, operation.dateIsuue, operation.IssuedBy, operation.receivedBy, operation.idImprss]
        );
    }

    static editOperation(operation) {
        return db.query(
            `
                        UPDATE operation set description=?, category=?, sCategory=?, cost=? ,  dateIsuue=?,  IssuedBy=?, receivedBy=? WHERE id = ?
                        `, [operation.description, operation.category, operation.sCategory, operation.cost, operation.dateIsuue, operation.IssuedBy, operation.receivedBy, operation.id]
        );
    }

    static getSubCategory(id) {
        return db.query(`SELECT * FROM 	subcategory  WHERE 	id = ?`, [id]);
    }

    static getCategoey(id) {
        return db.query(`SELECT * FROM 	category  WHERE 	id = ?`, [id]);
    }


    static getCompany() {
        return db.query(`SELECT * FROM  compagnie`);
    }
}