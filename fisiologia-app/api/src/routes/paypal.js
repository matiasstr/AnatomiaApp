const { Router } = require("express");
const route = Router();
const {createPayment, executePayment,createProduct, createPlan, generateSubscription} = require("../servicies/paypal.js");
require("dotenv").config();

route.post("/create-payment", createPayment)
route.get("/execute", executePayment)

route.post("/createProduct", createProduct);
route.post("/plan", createPlan)
route.post("/subscription", generateSubscription)
// route.put("/IProfile", putProfile)

module.exports = route;