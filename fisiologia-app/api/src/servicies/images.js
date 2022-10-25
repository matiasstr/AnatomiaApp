require("dotenv").config();
const { Images, Referencias } = require("../DB/db");
const { cloudinary } = require("../utils/cloudinary");
var path = require("path");
const fs = require("fs");

//Get de todas las imagenes
const getImage = async (req, res) => {
  // console.log(body.data);
  try {
    // console.log(arr)
    let response = await Images.findAll();
    // console.log(body)
    // console.log(response)
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
    console.log(response);
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
    let body = req.body;
    console.log(body)
    const uploadedResponse = await cloudinary.uploader.upload(body.img, {
      upload_preset: "dev_setups",
    });

    const responseImg = await Images.create({
      title: body.title,
      img: uploadedResponse.public_id,
      desc: body.desc,
      grupo: body.grupo,
      podcast: body.podcast,
    });

    res.status(200).json(responseImg);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  postImage,
  getImage,
  getImageByRef,
};
