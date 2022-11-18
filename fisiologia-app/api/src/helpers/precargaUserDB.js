const { bcrypt } = require("../Controllers/auxUserLogin/bcrypt");
const { User } = require("../db");
const axios = require("axios");
const { createUser } = require("../db");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;



async function createDefaulUsers() {
  console.log("se fue de aca")
}

module.exports = createDefaulUsers;
