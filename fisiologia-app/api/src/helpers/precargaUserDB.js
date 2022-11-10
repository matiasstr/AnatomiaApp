const { bcrypt } = require("../Controllers/auxUserLogin/bcrypt");
const { User } = require('../db');
const axios = require('axios')
const { createUser } = require('../db')

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;



const admin = [
  {
    "username": "Gianluca",
    "email": "a@a.com",
    "password": "12345678",
    "isAdmin": true,
  },
];


async function createDefaulUsers() {
  const usersFound = await User.findAll()
  if (usersFound.length > 0) {
     console.log("Usuarios creados previamente")
     return
  }

  usersToCreate.forEach(async user => {
     user.password = bcrypt(user.password);
     await User.create(user)
        .then(e => console.log("Usuario", user.userName, "agregado"))
        .catch(e => console.log("Usuario", user.userName, "AGREGADO PREVIAMENTE"))
  })
}

module.exports = createDefaulUsers 