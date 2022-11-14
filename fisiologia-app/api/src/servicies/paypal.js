require("dotenv").config();
const axios = require("axios");
const { verify } = require("jsonwebtoken");
const { tokenSign, verifyToken } = require("../helpers/handleJwt");
const { Planes } = require("../DB/db");
const { Usuarios } = require("../DB/db");
const request = require("request");
const CLIENT =
  `${process.env.CLIENT_ID_PAYPAL}`;
const SECRET =
  `${process.env.PASS_ID_PAYPAL}`;
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Live https://api-m.paypal.com
const auth = { user: CLIENT, pass: SECRET };

const generateSubscription = async (req, res) => {
  try {
    let body = req.body;
    let objetoSub = body[0];

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const dataUser = await verifyToken(body[1]);
    let userUpdate = await Usuarios.update(
      {
        isSuscrip: true,
        suscipData: objetoSub,
        fechaDeinicio: today.toLocaleDateString(),
        nombreDePlan: body[2],
      },
      {
        where: {
          id: dataUser._id,
        },
      }
    );

    const user = await Usuarios.findOne({
      where: {
        id: dataUser._id,
      },
    });

    let token = await tokenSign(user.dataValues);

    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Problema en la suscripcion" });
  }
};

const cancelSubscription = async (req, res) => {
  try {
    let { key } = req.body;
    const dataUser = await verifyToken(key);

    let usuarioCancel = await Usuarios.findOne({
      where: {
        id: dataUser._id,
      },
    });

    if (!usuarioCancel.dataValues.isSuscrip)
      res.status(400).json({ err: "El usuario no se encuentra suscripto" });

    let subId = usuarioCancel.dataValues.suscipData.subscriptionID;

    let authoken = await axios.post(
      `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
      { grant_type: "client_credentials" },
      {
        headers: {
          //aca van los headers del postman, a chequear como lo hago
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `${process.env.BASIC_AUTH}`,
        },
      }
    );
      console.log(subId)
    let cancel = await axios.post(
      `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subId}/cancel`,
      {
        reason: "Not satisfied with the service",
      },
      {
        headers: {
          //aca van los headers del postman, a chequear como lo hago
          Authorization: `bearer ${authoken.data.access_token}`,
        },
      }
    );

    let usuarioUpdate = await Usuarios.update(
      {
        isSuscrip: false,
        suscipData: null,
        fechaDeinicio: null,
        nombreDePlan: null,
      },
      {
        where: {
          id: dataUser._id,
        },
      }
    );

    let usuarioUpdated = await Usuarios.findOne({
      where: {
        id: dataUser._id,
      },
    });

    let userObj = {
      email: usuarioUpdated.dataValues.email,
      fechaDeinicio: usuarioUpdated.dataValues.fechaDeinicio,
      nombreDePlan: usuarioUpdated.dataValues.nombreDePlan,
      username: usuarioUpdated.dataValues.username,
    };

    let token = await tokenSign(usuarioUpdated.dataValues);

    let arrAux = [userObj, token];

    res.status(200).json(arrAux);
  } catch (error) {
    console.log(error);
    res.status(404).json({ err: "Error en la cancelacion de la suscripcion" });
  }
};

module.exports = {
  generateSubscription,
  cancelSubscription,
};
