const { Router } = require("express");
const express = require('express')
const router = Router();
const usuarios = require("./usuarios");
const images = require("./images");
const paypal = require("./paypal");


router.use(express.json({limit : '50mb'}))
router.use(express.urlencoded({limit: '50mb', extended: true}))

router.use("/usuarios", usuarios);
router.use("/paypal", paypal);
router.use("/images", images);

module.exports = router;