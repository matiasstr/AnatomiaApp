const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../helpers/handlePassword");
const { Usuarios } = require("../DB/db");
const { tokenSign } = require("../helpers/handleJwt");

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
    res.status(200).send(data);
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
    //Verifica la coincidencia del password con el email
    const hashPassword = user.dataValues.password;
    const check = await compare(req.password, hashPassword);
    if (!check) {
      res.status(402).send("PASSWORD_INVALIDO");
      return;
    };

    //Enmascara el Password para que no se vea por pantalla
    user.set("password", undefined, { strict: false });

    //Controla si el Usuario ya esta activo (logueado)
    if (user.isActiv === false) {
      //Si no lo esta lo loguea y lo coloca como activo
      console.log("Usuario NO ESTA activo");
      user.isActiv = true;
      console.log(user);
      return res.send("USUARIO_LOGUEADO");
    } else {
      //Si esta activo ya(logueado) deberia borrar el token
      return res.send("ERROR_USUARIO_YA_ESTA_LOGUEADO");
    }
  } catch (error) {
    console.log(error);
    res.send("USUARIO_LOGUEADO");
  }
};

module.exports = { regController, loginController };
