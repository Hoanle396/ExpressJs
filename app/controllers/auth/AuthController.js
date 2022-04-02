
const User = require('../../models/Users')
const jwt = require('jsonwebtoken')
class AuthController {

  signUp(req, res, next) {
    const { firstName, lastName, email, password, passwordRepeat } = req.body;

    User.findOne({ email: new RegExp(email, 'i') })
      .then(account => {
        if (account != null) {
          return res.json({ status: HttpStatus.BAD_REQUEST, message: 'error', data: 'Email was exist' });
        }
        else {
          if (password === passwordRepeat) {
            User.create({ firstName, lastName, email, password });
            return res.json({ status: HttpStatus.OK, message: 'success', data: 'Sign up successful ! Back to login' });
          }
          else {
            return res.json({ status: HttpStatus.BAD_REQUEST, message: 'error', data: 'Password Repeat not true' });
          }
        }
      })
  }
  async validateUser(req, res, next) {
    const user = await User.findOne({ email: new RegExp(req.body.email, 'i') })
    if (user && user.password === req.body.password) {
      const { password, ...result } = user;
      return res.json({ access_token: jwt.sign(result) });
    }
    return res.json({ status: HttpStatus.BAD_REQUEST, message: "Not authenticated!", data: '' });
  }

  async userInfo(req, res) {

  }
}
module.exports = new AuthController;