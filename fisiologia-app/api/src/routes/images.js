const { Router } = require("express");
const route = Router();
const {postImage, getImage, getImageByRef} = require("../servicies/images.js");
require("dotenv").config();

route.get("/", getImage)
route.get("/getRef", getImageByRef)
route.post("/post", postImage);
// route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

module.exports = route;



