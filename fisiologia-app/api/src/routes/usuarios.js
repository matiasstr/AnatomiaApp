const { Router } = require("express");
const route = Router();
const {getAllUsers } = require("../servicies/usuarios.js");
require("dotenv").config();

route.get("/", getAllUsers)
// route.post("/register", postUser);
// route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

module.exports = route;