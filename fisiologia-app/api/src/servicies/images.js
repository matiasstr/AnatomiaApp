require("dotenv").config();
const { Images, Referencias } = require("../DB/db");
const { cloudinary } = require("../utils/cloudinary");
var path = require("path");
const fs = require("fs");

//Get de todas las imagenes
const getImage = async (req, res) => {
  try {
    let response = await Images.findAll();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

//Get imagenes segun el grupo al que pertenece
const getImageByRef = async (req, res) => {
  let grupo = req.body;

  try {
    let response = await Images.findAll({
      where: {
        grupo: grupo.ref,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const getImageById = async (req, res) => {
  let { id } = req.params;

  try {
    let response = await Images.findOne({
      where: {
        id: id,
      },
    });

    res.status(200).json(response.dataValues);
  } catch (error) {
    console.log(error);
  }
};

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage }).array("MyFile");

const postImage = async (req, res) => {
  try {
    console.log("entro al back");
    let body = req.body;
    console.log(body);

    const uploadedResponse = await cloudinary.uploader.upload(body.img, {
      upload_preset: "dev_setups",
    });

    var arrAux = [];

    for (let i = 0; i < body.grupo.length; i++) {
      arrAux.push(body.grupo[i].toLowerCase());
    }

    const responseImg = await Images.create({
      title: body.title,
      img: uploadedResponse.public_id,
      desc: body.desc,
      grupo: arrAux,
      podcast: body.podcast,
    });

    res.status(200).json(responseImg);
  } catch (error) {
    console.log(error);
    console.log("entro por aca");
    res.status(404).send(error);
  }
};

module.exports = {
  postImage,
  getImage,
  getImageByRef,
  getImageById,
};
