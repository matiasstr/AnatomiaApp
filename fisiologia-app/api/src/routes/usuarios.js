const { Router } = require("express");
const route = Router();
const authMiddleware = require ('../middlewares/session');
const authRolMiddleware = require ('../middlewares/rolAdmin');
const {validadorPostUsuario} = require ('../validadores/usuarios');
const {getUser,postUsuario,postLogin } = require("../servicies/usuarios.js");
require("dotenv").config();

route.post("/usuario", getUser),
route.post("/register", validadorPostUsuario, postUsuario);
route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

module.exports = route;