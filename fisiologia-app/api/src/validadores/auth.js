const {check} =require('express-validator');
const {validateResults} = require('../helpers/ValidadorError');

const validatorRegUsuario =[

    check('username')
    .exists()
    .notEmpty(),


    check('email')
    .exists()
    .notEmpty()
    .isEmail(),

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

    check('isAdmin')
    .exists(),


    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

const validatorLogin =[

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

    check('email')
    .exists()
    .notEmpty()
    .isEmail(),

    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];


const validatorLogOut =[

    check('token')
    .exists(),

    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

module.exports = {validatorRegUsuario,validatorLogin, validatorLogOut};