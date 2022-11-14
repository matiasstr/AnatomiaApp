const { Router } = require("express");
const route = Router();
const authMiddleware = require ('../middlewares/session');
const authRolMiddleware = require ('../middlewares/rolAdmin');
const {validadorPostUsuario} = require ('../validadores/usuarios');
const {getUser,postUsuario,postLogin, createDefaulUsers } = require("../servicies/usuarios.js");
// const {createDefaulUsers } = require("../helpers/precargaUserDB");
require("dotenv").config();

route.post("/usuario", getUser),
route.post("/register", validadorPostUsuario, postUsuario);
route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

route.get("/precarga", createDefaulUsers)

module.exports = route;