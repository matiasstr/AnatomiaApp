const bcrypt = require("bcryptjs");
//Encriptado del Password
const encrypt = async (passwordPlain) => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};
//Compara Password plano con el Password hash
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
