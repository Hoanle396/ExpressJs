const MESSAGE = require('../../constants/messages.constant');
const jwtUtil = require('../utils/jwt.util');
class JWTMiddleware {
   authenticateToken(req, res, next) {
     try {
       const authHeader = req.headers['Authorization'];
       const token = authHeader && authHeader.split(' ')[1];
       if (!token) {
         res.statusMessage = MESSAGE.NO_TOKEN_PROVIDER;
         return res.sendStatus(403);
       }
       const decodedToken = jwtUtil.verifyLoginToken(token);
       if (!decodedToken) {
         res.statusMessage = MESSAGE.TOKEN_NOT_VALID;
         return res.sendStatus(401);
       }
       req.user = decodedToken.data;
       next();
     } catch (e) {
       res.statusMessage = MESSAGE.SERVER_ERROR;
       res.sendStatus(500);
     }
   }
}
module.exports = new JWTMiddleware();