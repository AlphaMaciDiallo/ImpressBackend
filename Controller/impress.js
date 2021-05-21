const { validationResult, body } = require('express-validator');

const Impress = require('../models/impress');
const operation = require('../models/operation');

exports.impressInput = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return
    const body = req.body;
    // val = 0;
    // const opera = await operation.getAllOperation();
    // if (opera[0].length == 0) { val = 1 }
    // console.log(val);
    try {

        const impressV = {
            amount: body.amount,
            startD: body.startD,
            endD: body.endD,
            userName: body.userName,
            permit: 0
        }
        const result = await Impress.save(impressV);

        res.status(201).json({ message: 'impress Registered succefuly !!!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.editImpress = async(req, res, next) => {
    const body = req.body;

    try {
        //  const result = await Impress.findImpress(body.id);
        const impressV = {
            id: body.id,
            amount: body.amount,
            startD: body.startD,
            endD: body.endD,
            userName: body.userName
        }
        const result = await Impress.editImp(impressV);

        res.status(201).json({ message: 'impress edited succefuly !!!' })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.udpatePermission = async(req, res, next) => {
    const body = req.body;
    const val = 1
    try {
        //  const result = await Impress.findImpress(body.id);
        console.log(body.id)
        const result = await Impress.udpatePermission(val, body.id);

        res.status(201).json({ message: 'Permission updaed succefuly !!!' })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.findImpress = async(req, res, next) => {
    const body = req.body;

    try {
        const result = await Impress.findImpress(body.id);
        if (result[0].length === 1) {
            result[0].forEach(Element => {
                if (Element.id) {
                    res.status(201).json({ message: 'Impress  Found !!!' });
                }
            })
        } else {
            res.status(201).json({ message: 'Impress not Found !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getAllImpress = async(req, res, next) => {

    try {
        const result = await Impress.getAllImpress();
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



exports.deleteImpress = async(req, res, next) => {
    const body = req.body;
    try {
        console.log(body.id);
        const result = await Impress.deleteImpress(body.id);
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

exports.getTotalmpress = async(req, res, next) => {
    try {
        // console.log(body.id)
        const result = await Impress.getTotalmpress();

        //console.log(result[0])
        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

//----Operation Ascending and Descending and verification
exports.getAllImpressbyAsc = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Impress.getAllImpressbyAsc();

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.getAllImpressbyDesc = async(req, res, next) => {

    try {
        // console.log(body.id)
        const result = await Impress.getAllImpressbyDesc();

        res.status(201).json(result[0]);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}