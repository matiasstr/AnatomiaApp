const validate = ({ email, username, password }) => {
  let error = {};

  if (!username) {
    error.username = "Falta ingresar un usuario";
  } else if (!email) {
    error.email = "Falta ingresar un email";
  } else if (!password) {
    error.password = "Falta ingresar una contraseña";
  }

  return error;
};

export default validate;
