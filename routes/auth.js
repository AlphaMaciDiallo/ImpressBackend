const express = require('express');
const { body } = require('express-validator');
const User = require('../models/user');

const router = express.Router();
// const User = require('../models/user')
const authController = require('../Controller/auth');
const ImpressController = require('../Controller/impress');
const OperationController = require('../Controller/operation');
router.post(
    '/singup', [
        body('email').isEmail().withMessage('Kindly enter a valid Email !!!').custom(async(email) => {
            const user = await User.find(email);
            if (user[0].length > 0) {
                return Promise.reject('Email address alredy exist ')
            }
        }).normalizeEmail(),
        body('password').trim().isLength({ min: 6 })
    ], authController.singup
);
router.post(
    '/find', [

    ], authController.find
);

//---------------------------------------impress router----------------------------------------------
router.post(
    '/impress', [

    ], ImpressController.impressInput
);
router.get(
    '/getAllImpress', [

    ], ImpressController.getAllImpress
);
router.get(
    '/getTotalmpress', [

    ], ImpressController.getTotalmpress
);
router.post(
    '/findImpress', [

    ], ImpressController.findImpress
);

router.post(
    '/editImpress', [

    ], ImpressController.editImpress
);

router.post(
    '/udpatePermission', [

    ], ImpressController.udpatePermission
);

router.post(
    '/deletImpress', [

    ], ImpressController.deleteImpress
);
//------------------------------------------Category and subCategory router
router.get(
    '/getCategory', [

    ], authController.getCategory
);

router.post(
    '/getsubCategory', [

    ], authController.getsubCategory
);

//--------------------------operation router
router.post(
    '/operationSave', [

    ], OperationController.operationInput
);
router.get(
    '/getAllIOperations', [

    ], OperationController.getAllOperation
);

router.get(
    '/getAllOperaionTotal', [

    ], OperationController.getAllOperaionTotal
);

router.post(
    '/editOperation', [

    ], OperationController.editOperation
);


router.post(
    '/findOperation', [

    ], OperationController.findOperation
);

router.post(
    '/deletOperation', [

    ], OperationController.deleteOperation
);

//-----Company
router.get(
    '/getCompany', [

    ], OperationController.getCompany
);

//---operation Ascending desencding and verification
router.get(
    '/getAllOperationbyAsc', [

    ], OperationController.getAllOperationbyAsc
);
router.get(
    '/getAllOperationbyDesc', [

    ], OperationController.getAllOperationbyDesc
);

//---impress Ascending desencding and verification
router.get(
    '/getAllImpressbyDesc', [

    ], ImpressController.getAllImpressbyDesc
);
router.get(
    '/getAllImpressbyAsc', [

    ], ImpressController.getAllImpressbyAsc
);

module.exports = router;