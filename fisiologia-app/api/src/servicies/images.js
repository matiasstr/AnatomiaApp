require("dotenv").config();
const { Images } = require("../DB/db");
const multer = require("multer");
var path = require("path");
const { Op } = require("sequelize");

const getImage = async (req, res) => {
  let body = req.body;
  // console.log(body.data);
  try {


    console.log(arr)

    let response = await Images.findAll({
      where: {
        ref: {
          [Op.overlap]: body.data
        },
      },
    });

    // console.log(response)
    res.status(200).json(response);
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

    const response = await Images.create({
      img: strPath,
      ref: arrRef,
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  postImage,
  upload,
  getImage,
};
