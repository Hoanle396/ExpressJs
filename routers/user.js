const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/User.controller');
const authenticate = require('../app/middlewares/authenticate.module');
const authorize = require('../app/middlewares/authorization.module');

router.get('/', authenticate.authenticateToken, userController.index);
router.get('/:id', authenticate.authenticateToken, userController.show);
router.patch(
  '/',
  authenticate.authenticateToken,
  authorize.authorizeUser,
  userController.update
);

module.exports = router;