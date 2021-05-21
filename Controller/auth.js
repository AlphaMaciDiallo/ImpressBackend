const { validationResult, body } = require('express-validator');

const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.singup = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return

    const body = req.body;

    try {
        const hashedPwd = await bcrypt.hash(body.password, 12)
        const userDetai = {
            Name: body.Name,
            email: body.email,
            password: hashedPwd
        }

        const result = await User.save(userDetai);

        res.status(201).json({ message: 'User Registered succefuly !!!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.editImpress = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return

    const body = req.body;

    try {
        const userDetails = {
            amount1: body.amount,
            startD1: body.startD,
            endD1: body.endD,
            userName1: body.userName
        }

        const result = await User.edit(userDetails);

        res.status(201).json({ message: 'User Edited succefully !!!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.find = async(req, res, next) => {
    const body = req.body;

    try {
        const result = await User.find(body.email);
        if (result[0].length === 1) {
            result[0].forEach(Element => {
                if (bcrypt.compareSync(body.password, Element.password) == true) {
                    res.status(201).json({ Name: `${Element.Name}` });
                } else {
                    res.status(201).json({ message: 'wrong password !!!' });
                }
            })
        } else {
            res.status(201).json({ message: 'User not Found !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getCategory = async(req, res, next) => {

    try {
        const result = await User.getCategory();
        if (result[0].length > 0) {
            res.status(201).json(result[0]);
        } else {
            res.status(201).json({ message: 'category not Found !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.getsubCategory = async(req, res, next) => {
    const body = req.body;
    try {
        // console.log(body.id);
        const result = await User.getSubCategory(body.id);
        if (result[0].length > 0) {
            res.status(201).json(result[0]);
        } else {
            res.status(201).json({ message: 'sub category not Found !!!' });
        }

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}