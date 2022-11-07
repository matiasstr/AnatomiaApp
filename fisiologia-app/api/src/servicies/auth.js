const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../helpers/handlePassword");
const { Usuarios } = require("../DB/db");
const { tokenSign, verifyToken } = require("../helpers/handleJwt");
const { verify } = require("jsonwebtoken");

//Registro de nuevo usuario
const regController = async (req, res) => {
  try {
    req = matchedData(req);
    //encripta password
    const password = await encrypt(req.password);
    const body = { ...req, password };
    //Crea nuevo usuario
    const dataUser = await Usuarios.create(body);
    let data = {
      token: await tokenSign(dataUser.dataValues),
      user: dataUser.dataValues,
    };
    // let user= await verifyToken(data.token);
    res.status(200).send(data.token);
  } catch (error) {
    res.status(404).send("ERROR_DE_REGISTRO");
    console.log(error);
  }
};

//Logueo y verificacion de actividad de usuario
const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await Usuarios.findOne({
      where: {
        email: req.email,
      },
    });
    //Verifica si existe el email en la BD de usuarios
    if (!user) {
      res.status(404).send("EMAIL_INEXISTENTE");
      return;
    }

    const updated = await Usuarios.update(
      { isActiv: true },
      { where: { email: req.email } }
    );

    //Verifica la coincidencia del password con el email
    const hashPassword = user.dataValues.password;
    const check = await compare(req.password, hashPassword);
    if (!check) {
      res.status(402).send("PASSWORD_INVALIDO");
      return;
    }
    //Enmascara el Password para que no se vea por pantalla
    user.set("password", undefined, { strict: false });
    let token = await tokenSign(user.dataValues);

    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(404).send("ERROR_DE_LOGUEO");
  }
};

const authUserToken = async (req, res) => {
  try {
    console.log("sasda");

    // req = matchedData(req);
    // const user = await Usuarios.findOne({
    //   where: {
    //     email: req.email,
    //   },
    // });
    // //Verifica si existe el email en la BD de usuarios
    // if (!user) {
    //   res.status(404).send("EMAIL_INEXISTENTE");
    //   return;
    // }
    // //Verifica la coincidencia del password con el email
    // const hashPassword = user.dataValues.password;
    // const check = await compare(req.password, hashPassword);
    // if (!check) {
    //   res.status(402).send("PASSWORD_INVALIDO");
    //   return;
    // };
    // //Enmascara el Password para que no se vea por pantalla
    // user.set("password", undefined, { strict: false });
    // let token= await tokenSign(user.dataValues)
    // return res.status(200).json(token);
  } catch (error) {
    // console.log(error);
    // res.send("ERROR_DE_LOGUEO");
  }
};

//LogOut
const logOutController = async (req, res) => {
  try {
    //Matchear con el usuariogit
    let body = matchedData(req);
    // let user= await verifyToken(data.token);
    let tokenVerificado= await verifyToken(body.token);
    //Cambiarle isActive a False
    const user = await Usuarios.update(
      { isActiv: false },
      { where: { id: tokenVerificado._id } }
    );
    //eliminar Token y sessionStorage
    res.send("USUARIO_DESLOGUEADO");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  regController,
  loginController,
  logOutController,
  authUserToken,
};
