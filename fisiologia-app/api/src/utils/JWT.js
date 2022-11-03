const { sign, verify, decode } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    JSON.stringify({
      username: user.dataValues.username,
      email:user.dataValues.email,
      id: user.dataValues.id,
    }),
    "jwtsecretcambiar"
  );

  return accessToken;
};


module.exports = { createTokens };