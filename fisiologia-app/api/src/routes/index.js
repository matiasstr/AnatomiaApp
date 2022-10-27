const { Router } = require("express");
const router = Router();
const usuarios = require("./usuarios");
const auth = require("./auth");
const images = require("./images");

router.use("/usuarios", usuarios);
router.use("/auth", auth);
router.use("/images", images);

module.exports = router;