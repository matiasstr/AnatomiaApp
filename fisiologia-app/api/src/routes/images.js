const { Router } = require("express");
const route = Router();
const {postImage,
    upload} = require("../servicies/images.js");
require("dotenv").config();

// route.get("/", getImage)
route.post("/post", upload, postImage);
// route.post("/login", postLogin);
// route.put("/cambiar", putModificarAdmin)
// route.put("/eliminar", putElminar)
// route.put("/IProfile", putProfile)

module.exports = route;