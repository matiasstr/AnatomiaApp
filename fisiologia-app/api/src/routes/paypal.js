const { Router } = require("express");
const route = Router();
const {generateSubscription, cancelSubscription} = require("../servicies/paypal.js");
require("dotenv").config();

route.post("/subscription", generateSubscription)
route.post("/cancel", cancelSubscription)


module.exports = route;