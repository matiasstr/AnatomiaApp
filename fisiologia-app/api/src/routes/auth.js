const { Router } = require("express");
const route = Router();
const { validatorRegUsuario, validatorLogin } = require("../validadores/auth");
const {regController,loginController, authUserToken} = require('../servicies/auth');
const authMiddleware = require ('../middlewares/session');
const authRolMiddleware = require ('../middlewares/rolAdmin');
require("dotenv").config();

//http://localhost:3001/auth/register
route.post("/register", validatorRegUsuario,regController);
//http://localhost:3001/auth/login
route.post("/login", validatorLogin,loginController);


route.post("/user", authUserToken);


module.exports = route;
