const {check} =require('express-validator');
const {validateResults} = require('../helpers/ValidadorError');

const validatorRegUsuario =[

    check('username')
    .exists()
    .notEmpty()
    .isLength({min:8, max:12}),

    check('email')
    .exists()
    .notEmpty()
    .isEmail(),

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

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

module.exports = {validatorRegUsuario,validatorLogin};