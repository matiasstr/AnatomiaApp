const { verifyToken } = require("../helpers/handleJwt");

//Contola si es Rol
const authRolMiddleware = async (req, res, next) => {
  try {
    //Verifica si tiene Token
    if (!req.headers.authorization) {
      res.status(401).send("NOT_TOKEN");
      return;
    };
    //Separa los datos del usuario del token
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    let rol = dataToken.isAdmin;
    console.log("rol", rol);
    //Controla si es Admin
    if (!rol) {
      res.status(401).send("PERMITS_DENIED");
      return;
    }
    //Si lo es da permisos
    next();
  } catch (error) {
    res.status(401).send("NOT_SESSION");
    console.log(error);
  }
};

module.exports = authRolMiddleware;
