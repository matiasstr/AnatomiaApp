require("dotenv").config();
const { matchedData } = require("express-validator");
const { Usuarios } = require("../DB/db");
const bcrypt = require("bcrypt");
const { createTokens } = require("../utils/JWT");
const { verify } = require("jsonwebtoken");
const { tokenSign, verifyToken } = require("../helpers/handleJwt");
// const { mandarEmail } = require("../utils/sendEmail");

const getUser = async (req, res) => {
  try {
    let body = req.body;
    let user = await verifyToken(body.key);
    const users = await Usuarios.findOne({
      where: {
        id: user._id,
      },
    });

    let userObj = {
      email: users.dataValues.email,
      fechaDeinicio: users.dataValues.fechaDeinicio,
      nombreDePlan: users.dataValues.nombreDePlan,
      username: users.dataValues.username,
    };
    res.status(200).json(userObj);
  } catch (error) {
    res.status(404).send(error);
  }
};
//POST Usuario
const postUsuario = async (req, res) => {
  try {
    const body = matchedData(req);



    if (!body.username || !body.email || !body.password)
      return res.status(404).send("Falta completar un dato..");

    const duplicado = await Usuarios.findAll({
      where: {
        email: body.email,
      },
    });

    if (duplicado.length === 0) {
      bcrypt
        .hash(body.password, 10)

        .then(async (hash) => {
          const data = await Usuarios.create({
            username: body.username,
            email: body.email,
            password: hash,
          }).then((response) => {
            res.status(200).json(response);
          });
        })
        .catch((err) => {
          if (err) {
            res.status(400).json("El usuario ya existe");
          }
        });
    } else {
      res
        .status(400)
        .json({ err: "Un usuario ya existe con el email ingresado" });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
//POST Login
const postLogin = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await Usuarios.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).send("Usuario no existente");
    }

    if (user.length === 0)
      res.status(400).json({ error: "El usuario no existe" });

    const dbPass = user.dataValues.password;

    bcrypt
      .compare(password, dbPass)
      .then((match) => {
        if (!match) {
          res
            .status(400)
            .json({ error: "Combinacions de usuario y password erroneo" });
        } else {
          const accessToken = createTokens(user);

          res.status(200).json(accessToken);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

// const postUser = async (req, res) => {
//   try {
//     const { username, email, password, isAdmin } = req.body;

//     if (!username || !email || !password)
//       return res.status(404).send("Falta completar un dato..");
//     bcrypt
//       .hash(password, 10)

//       .then(async (hash) => {
//         const response = await Usuarios.create({
//           username: username,
//           password: hash,
//           email: email,
//           isAdmin,
//         })
//           .then((response) => {
//             res.status(200).send("Usuario creado con exito");
//           })
//           .then(() => {
//             try {
//               mandarEmail(username, email, password);
//             } catch (error) {
//               console.log(error);
//             }
//           });
//       })
//       .catch((err) => {
//         if (err) {
//           res.status(400).send("El usuario ya existe");
//         }
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(404).send(error);
//   }

// };

// const putProfile = async (req, res) => {
//   console.log("estoy entrando");
//   let { id, avatar, nickname } = req.body;
//   console.log(id, nickname);
//   try {
//     console.log("estoy entrando try");
//     // const upload = await cloudinary.uploader.upload(avatar, {
//     //   upload_preset: "mf7vmjsa",
//     // });
//     if (!nickname) {
//       console.log("estoy entrando en !nickname");
//       console.log(avatar);
//       const upload = await cloudinary.uploader.upload(avatar, {
//         upload_preset: "mf7vmjsa",
//       });
//       console.log("estoy saliendo cloud");
//       const response = await Usuarios.update(
//         { picture: upload.url },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//       console.log("estoy saliendo update sin nickname");
//     } else if (!avatar) {
//       // console.log(id, nickname);
//       console.log("estoy entrando en !avatar");
//       const response = await Usuarios.update(
//         { nickname: nickname },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//       console.log("estoy saliendo update sin foto");
//     } else {
//       const upload = await cloudinary.uploader.upload(avatar, {
//         upload_preset: "mf7vmjsa",
//       });
//       console.log("estoy saliendo cloud");
//       const response = await Usuarios.update(
//         { nickname: nickname, picture: upload.url },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//       console.log("estoy saliendo update con ambos");
//     }
//     let user = await Usuarios.findByPk(id);
//     console.log(user);
//     return res.status(200).send(user);
//     // const response = await Usuarios.update(
//     //   { nickname: nickname, picture: upload.url },
//     //   {
//     //     where: {
//     //       id: id,
//     //     },
//     //   }
//     // );
//     // console.log("estoy saliendo update");
//     // console.log(response);
//     // return res.status(200).send(response);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// const putModificarAdmin = async (req, res) => {
//   let { id, admin } = req.body;
//   try {
//     if (admin === "true") {
//       const userValidate = await Usuarios.findOne({
//         where: { id: id },
//       });

//       if (!userValidate.dataValues.isAdmin) {
//         var user = await Usuarios.update(
//           { isAdmin: true },
//           {
//             where: {
//               id: id,
//             },
//           }
//         );
//       }
//     } else {
//       var user = await Usuarios.update(
//         { isAdmin: false },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//     }
//     let userasd = await Usuarios.findByPk(id);
//     console.log(userasd);
//     res.status(200).json(userasd);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

const createDefaulUsers = async (req, res) => {

  const admin = [
    {
      username: "Gianluca",
      email: "a@a.com",
      password: "12345678",
      isAdmin: true,
    },
  ];


  const usersFound = await Usuarios.findAll();

  if (usersFound.length > 0) {
    return res.status(400).json({msg : "Usuarios creados previamente"});
  }

  admin.forEach(async (user) => {
    bcrypt.hash(user.password, 10).then(async (hash) => {
      await Usuarios.create({
        username: user.username,
        email: user.email,
        password: hash,
        isAdmin: user.isAdmin,
      })
        .then((e) => {
          console.log("Usuario", user.username, "agregado")
          res.status(200).json({msg : "Usuarios pre cargados"})
        })
        .catch((e) =>
        {
          console.log("Usuario", user.username, "AGREGADO PREVIAMENTE")
          res.status(400).json({msg : "Usuarios no fueron pre cargados"})

        }
        );
    });

    //  user.password = bcrypt(user.password);
  });
};

module.exports = {
  getUser,
  postUsuario,
  postLogin,
  createDefaulUsers
};
