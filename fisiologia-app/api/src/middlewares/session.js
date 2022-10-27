const {verifyToken} = require ('../helpers/handleJwt');

const authMiddleware = async (req,res,next) =>{
    try {
        if(!req.headers.authorization){
            res.status(401).send('NOT_TOKEN');
            return
        };
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken._id){
            res.status(401).send('No pasas!');
            return            
        }
        next();
    } catch (error) {
        res.status(401).send('NOT_SESSION')
        console.log(error)
    }
}

module.exports = authMiddleware;