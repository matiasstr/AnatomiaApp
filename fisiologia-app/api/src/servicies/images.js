require("dotenv").config();
const { Images } = require("../DB/db");
const multer = require('multer')



const getAllUsers = async (req, res) => {
    try {
      const users = await Usuarios.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  };
  

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/images')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({storage: storage})

exports.upload = upload.single('MyFile')


exports.uploadFile = (req, res) => {
    res.send({data : "Enviar un archivo"})
}



