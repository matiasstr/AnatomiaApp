const {verifyToken} = require ('../helpers/handleJwt');

const authRolMiddleware = async (req,res,next) =>{
    try {
        if(!req.headers.authorization){
            res.status(401).send('NOT_TOKEN');
            return
        };
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        let rol=dataToken.isAdmin;
        console.log('rol',rol);
        if(!rol){
            res.status(401).send('PERMITS_DENIED');
            return            
        }
        next();
    } catch (error) {
        res.status(401).send('NOT_SESSION')
        console.log(error)
    }
}

module.exports = authRolMiddleware;