const { verifyToken } = require("../helpers/handleJwt");
//Controla la Existencia del token
const authMiddleware = async (req, res, next) => {
  try {
    //Controla si ya tiene toke creado
    if (!req.headers.authorization) {
      res.status(401).send("NOT_TOKEN");
      return;
    }
    //Separa los datos del usuario del token
    const token = req.headers.authorization.split(" ").pop();
    //Verifica si el token es correcto
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
        res.status(401).send("TOKEN_INCORRECTO");
        return;
    }
    //Si es correcto permite que el usuario continue
    next();
  } catch (error) {
    res.status(401).send("NOT_SESSION");
    console.log(error);
  }
};

module.exports = authMiddleware;
