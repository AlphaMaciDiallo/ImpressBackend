const { validationResult, body } = require('express-validator');

const Operation = require('../models/operation');

exports.operationInput = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return
    const body = req.body;
    try {
        const cat = await Operation.getSubCategory(body.sCategory);
        cat[0].forEach(element => {
            body.sCategory = element.name
        });
        const cat1 = await Operation.getCategoey(body.category);
        cat1[0].forEach(element => {
            body.category = element.name
        });
        const operationV = {
            description: body.description,
            category: body.category,
            sCategory: body.sCategory,
            cost: body.cost,
            dateIsuue: body.dateIsuue,
            IssuedBy: body.IssuedBy,
            receivedBy: body.receivedBy,
            idImprss: body.idImprss
        }
        const result = await Operation.saveOperation(operationV);

        res.status(201).json({ message: 'Operation Registered succefuly !!!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.editOperation = async(req, res, next) => {
    const body = req.body;
    const cat = await Operation.getSubCategory(body.sCategory);

    try {
        //  const result = await Impress.findImpress(body.id);
        cat[0].forEach(element => {
            body.sCategory = element.name
        });
        const cat1 = await Operation.getCategoey(body.category);
        cat1[0].forEach(element => {
            body.category = element.name
        });
        const operationV = {
            id: body.id,
            description: body.description,
            category: body.category,
            sCategory: body.sCategory,
            cost: body.cost,
            dateIsuue: body.dateIsuue,
            IssuedBy: body.IssuedBy,
            receivedBy: body.receivedBy,

        }
        console.log(operationV.id);
        const result = await Operation.editOperation(operationV);

        res.status(201).json({ message: 'operation editeted succefuly !!!' })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getAllOperation = async(req, res, next) => {

    try {
        const result = await Operation.getAllOperation();
        if (result[0].length > 0) {
            res.status(201).json(result[0]);
        } else {
            res.status(201).json({ succes: 0, message: 'Impress not Found !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}



exports.deleteOperation = async(req, res, next) => {
    const body = req.body;
    try {
        console.log(body.id);
        const result = await Operation.deleteOperation(body.id);
        //res.status(201).json({ message: 'Delete succes !!!' });
        if (result[0].length == 1) {
            res.status(201).json({ message: 'Delete succes !!!' });
        } else {
            res.status(201).json({ message: 'Delete Not success !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getAllOperaionTotal = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Operation.getAllOperaionTotal();

        //console.log(result[0])
        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.findOperation = async(req, res, next) => {
    const body = req.body;
    try {
        const result = await Operation.findOperation(body.id);

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}


//------------Company

exports.getCompany = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Operation.getCompany();

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

//----Operation Ascending and Descending and verification
exports.getAllOperationbyAsc = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Operation.getAllOperationbyAsc();

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.getAllOperationbyDesc = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Operation.getAllOperationbyDesc();

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}