const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../helpers/handlePassword");
const { Usuarios } = require("../DB/db");
const { tokenSign } = require("../helpers/handleJwt");

const regController = async (req, res) => {
        try {
          req = matchedData(req);
          const password = await encrypt(req.password);
          const body = { ...req, password };
          console.log(body);
          const dataUser = await Usuarios.create(body);
          let data = {
            token: await tokenSign(dataUser.dataValues),
            user: dataUser.dataValues,
          };
          res.send( data );
        } catch (error) {
          console.log(error);
    };
};

const loginController = async (req, res)=>{
  try {
    req= matchedData(req);
    const user = await Usuarios.findOne({where: {
      email:req.email
   }
  });
    
    if(!user){
      res.status(404).send('USUARIO_INEXISTENTE');
      return
    }
    // console.log(user.dataValues.password);
    const hashPassword= user.dataValues.password;
    const check = await compare(req.password,hashPassword);

    if(!check){
      res.status(402).send('PASSWORD_INVALIDO');
      return
    }

     user.set('password', undefined, {strict:false});
    console.log('datosUser: ',user.dataValues)
     if(user.dataValues.isActiv===false){
      console.log('stateUser: ',user.dataValues.isActive);

      let data = {
        token: await tokenSign(user),
        user: user.dataValues,
      }
      console.log('Usuario estado Activo')
      res.send(data);      
     } else {
      let data = {
        token: 'Bloqueado',
        user: user.dataValues,
      }
      res.status(409).send('El ussuario ya se encuentra activo!')
     }
    
    



  } catch (error) {
    console.log(error);
  }
}

module.exports = { regController, loginController };