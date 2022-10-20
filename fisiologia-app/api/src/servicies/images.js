require("dotenv").config();
const { Images, Referencias } = require("../DB/db");
const multer = require("multer");
var path = require("path");
const { Op } = require("sequelize");

//Get de todas las imagenes
const getImage = async (req, res) => {
  // console.log(body.data);
  try {
    console.log(arr)
    let response = await Images.findAll();
    console.log(body)
    // console.log(response)
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

//Get imagenes segun el grupo al que pertenece
const getImageByRef = async (req, res) => {
  let grupo = req.body;

  console.log(body.data);
  console.log(id_ref);

  try {
    let response = await Images.findAll({
      where: {
        grupo: grupo,
      },
    });
    console.log(body)
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).array("MyFile");

const postImage = async (req, res) => {
  try {
    let arrRef = req.body.string.split(",");

    let arrPath = req.files[0].path.split("\\");
    let strPath = ".." + arrPath.join("/");

    const responseImg = await Images.create({
      path: strPath
    });

    const responseRef  = await Referencias.create({

    })

    res.status(200).json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  postImage,
  upload,
  getImage,
  getImageByRef,
};
