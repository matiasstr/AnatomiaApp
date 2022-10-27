const { Router } = require("express");
const route = Router();
const { validatorRegUsuario, validatorLogin } = require("../validadores/auth");
const {regController,loginController} = require('../servicies/auth');
require("dotenv").config();

//http://localhost:3001/auth/register
route.post("/register", validatorRegUsuario, regController);
//http://localhost:3001/auth/login
route.post("/login", validatorLogin, loginController);

module.exports = route;
