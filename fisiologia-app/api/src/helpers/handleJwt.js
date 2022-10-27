const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
//Creacion del Token
const tokenSign = async (user) => {
  try {
    const sing = await jwt.sign(
      {
        _id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET, //Firma para verificar
      {
        expiresIn: 30 * 60 * 60,
      }
    );

    return sing;
  } catch (error) {
    console.log(error);
  }
};
//Verifica si el usuario esta logueado
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
