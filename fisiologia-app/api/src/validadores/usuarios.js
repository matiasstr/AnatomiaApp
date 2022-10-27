const {check} = require('express-validator');
const {validateResults} = require('../helpers/ValidadorError');

const validadorPostUsuario =[
    check('username')
    .exists()
    .notEmpty(),

    check('email')
    .exists()
    .notEmpty(),

    check('password')
    .exists()
    .notEmpty(),

    (req,res,next)=>{
        return validateResults (req,res,next)
    }
];

module.exports = { validadorPostUsuario };