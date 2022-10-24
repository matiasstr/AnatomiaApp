require("dotenv").config();
const { Images, Referencias } = require("../DB/db");
const multer = require("multer");
var path = require("path");
const fs = require("fs");

//Get de todas las imagenes
const getImage = async (req, res) => {
  // console.log(body.data);
  try {
    let response = await Images.findAll();
    // const contents = await fs.readFile('/path/to/file.jpg', {encoding: 'base64'});
    
    response.forEach((e) => {
      
      
      e.img = fs.readFileSync(e.img, { encoding: "base64" });
    });

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
    let body = req.body;

    var absolutePath = path.resolve("../images/1666627380521-matisauron.jpg");
    console.log(absolutePath)



    let arrPath = req.files[0].path.split("\\");
    let strPath =
      "C:/Users/Matu/Desktop/FisiologiaApp/FisiologiaApp/fisiologia-app/api/" + arrPath.join("/");

    const responseImg = await Images.create({
      title: body.title,
      img: strPath,
      desc: body.desc,
      grupo: body.grupo,
      podcast: body.podcast,
    });

    res.status(200).json(responseImg);
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
