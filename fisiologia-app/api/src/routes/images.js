const { Router } = require("express");
const route = Router();
const controller = require("../servicies/images.js");
require("dotenv").config();

// route.get("/", getImage)
route.post("/post", controller.upload, controller.uploadFile);
// route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

module.exports = route;