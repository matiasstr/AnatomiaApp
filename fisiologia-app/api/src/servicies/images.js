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
    res.status(404).send(error);
  }
};

const createDefaulImg = async (req, res) => {
  try {
    //dev_setups/x09elitmfz5bbg6krybj //cerebro

    //dev_setups/nnkncr9oh30lsokyf3r6 //columna

    //dev_setups/kkrr1syxhiczr6tpxh39 // Neurona
    //dev_setups/iethoxxtqiryngyh3sui // mano

    const Imagenes = [
      {
        title: "Columna",
        img: "dev_setups/nnkncr9oh30lsokyf3r6",
        desc: "Vista de columna vertebral, oseo",
        podcast: " asd",
        grupo: ["hueso", "esqueleto"],
      },
      {
        title: "Cerebro",
        img: "dev_setups/x09elitmfz5bbg6krybj",
        desc: "Vista de cerebro",
        podcast: " asd",
        grupo: ["encefalo", "snc"],
      },
      {
        title: "Neurona",
        img: "dev_setups/kkrr1syxhiczr6tpxh39",
        desc: "Vista de neurona",
        podcast: " asd",
        grupo: ["snp", "neurona"],
      },
      {
        title: "Mano",
        img: "dev_setups/iethoxxtqiryngyh3sui",
        desc: "Vista de Mano, oseo",
        podcast: " asd",
        grupo: ["esqueleto", "mano"],
      },
    ];

    const imagesFound = await Images.findAll();

    if (imagesFound.length > 0) {
      return res.status(400).json({msg : "Imagenes creadas previamente"});
    }


    var arrPromiseAux = [];

    Imagenes.forEach((img) => {
      let imgProm = "";
      imgProm = Images.create({
        title: img.title,
        img: img.img,
        desc: img.desc,
        podcast: img.podcast,
        grupo: img.grupo,
      });
      arrPromiseAux.push(imgProm);
    });

    // console.log("acac es tasd",arrPromiseAux)

    const resultado = await Promise.all(arrPromiseAux);

    let arrResultadoAux = [];

    resultado.forEach((img) => {
      arrResultadoAux.push(img.dataValues);
    });

    // console.log(imagenesPrecargadas.dataValues)
    // const { resources } = await cloudinary.search
    //   .expression("folder:dev_setups")
    //   .sort_by("public_id", "desc")
    //   .max_results(30)
    //   .execute();

    res.status(200).json(arrResultadoAux);
    // console.log(imagenesPrecargadas)
    // const public_ids = resources.map((file) => file.public_id);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  postImage,
  getImage,
  getImageByRef,
  getImageById,
  createDefaulImg,
};
