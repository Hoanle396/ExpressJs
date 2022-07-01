
const MESSAGE= require('../../constants/messages.constant');
const Role = require('../../enums/role.enum');
 class AuthorizationMiddleware {
   authorizeUser(req, res, next) {
      try {
         const user = req.user;
         if (!user || user.role !== Role.USER) {
            res.statusMessage = MESSAGE.NOT_AUTHORIZED
            return res.sendStatus(403);
         }
         next();
      }
      catch (e) {
         res.statusMessage = MESSAGE.SERVER_ERROR
         return res.sendStatus(500);
      }
   }
   authorizeBroker(req, res, next) {
      try {
         const user = req.user;
         if (!user || user.role !== Role.BROKER) {
            res.statusMessage = MESSAGE.NOT_AUTHORIZED
            return res.sendStatus(403);
         }
         next();
      }
      catch (e) {
         res.statusMessage = MESSAGE.SERVER_ERROR
         return res.sendStatus(500);
      }
   }
   authorizeAdmin(req, res, next) {
      try {
         const user = req.user;
         if (!user || user.role !== Role.ADMIN) {
            res.statusMessage = MESSAGE.NOT_AUTHORIZED
            return res.sendStatus(403);
         }
         next();
      }
      catch (e) {
         res.statusMessage = MESSAGE.SERVER_ERROR
         return res.sendStatus(500);
      }
   }
}
module.exports = new AuthorizationMiddleware();