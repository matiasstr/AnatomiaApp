const { bcrypt } = require("../Controllers/auxUserLogin/bcrypt");
const { images } = require('../db');
const axios = require('axios')
const { createUser } = require('../db')

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;




const Imagenes = [
    {
      "title": "Columna",
      "img": "dev_setups/m5whg3hsxdswbewambjn",
      "desc" : "Vista de columna vertebral, oseo",
      "podcast": " asd",
      "grupo":"Hueso, Sistema Nervioso"
    }
  ];
  
  async function createDefaulImg() {
    const imgFound = await images.findAll()
    if (imgFound.length > 0) {
       console.log("Imagenes creadas previamente")
       return
    }
  
    Imagenes.forEach(async img => {
      img.password = bcrypt(img.password);

       await images.create(img)

          .then(e => console.log("Imagen", e.username, "agregado"))
          .catch(e => console.log("Imagen", user.username, "AGREGADO PREVIAMENTE"))
    })
  }

  module.exports = createDefaulImg 