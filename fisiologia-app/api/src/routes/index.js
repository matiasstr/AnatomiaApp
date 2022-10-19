const { Router } = require("express");
const router = Router();
const usuarios = require("./usuarios");
const images = require("./images");

router.use("/usuarios", usuarios);
router.use("/images", images);

module.exports = router;