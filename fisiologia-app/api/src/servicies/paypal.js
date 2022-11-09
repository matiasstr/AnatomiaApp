require("dotenv").config();
const axios = require("axios");
const { verify } = require("jsonwebtoken");
const { Planes } = require("../DB/db");
const { Usuarios } = require("../DB/db");
const request = require("request");
const { verifyToken } = require("../helpers/handleJwt");
const CLIENT =
  "AQQ6HIO71HvXznp7nZpLFfeVfmzyJfc3PRwvA36mCLV8lWq9Vv34gs-1OE4r6SEUBSSZPw_nl4FuMVnt";
const SECRET =
  "EL3kdkr61kGl7sztXRAmgptScwDAT-TRnWnPB8hjM34gj6PLeiYPaO5J8kAXmxS9ofs2Oo6TAezYvTzk";
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

    res.status(200).json({ msg: "Usuario suscripto" });
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

    let cancel = await axios.post(
      `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subId}/cancel`,
      {
        reason: "Not satisfied with the service",
      },
      {
        headers: {
          //aca van los headers del postman, a chequear como lo hago
          Authorization:
            "Bearer A21AAKZD3upovb_zzmykbwX53TTA5NqYRh8i2SS-bybbA3s49E6mMMWBnPFUJl-OAiq3V8P9kP7nm5Y4vX0u011tsjk7XfrEA",
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



    res.status(200).json(userObj);
  } catch (error) {
    res.status(404).json({ err: "Error en la cancelacion de la suscripcion" });
    console.log(error);
  }
};

module.exports = {
  generateSubscription,
  cancelSubscription,
};
