require('dotenv').config();
const jwt = require('jsonwebtoken');

class JWTUtil {
  generateToken(data) {
    const accessToken = jwt.sign(data, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_TTL,
    });
    const refreshToken = jwt.sign(data, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_REFRESH_TTL,
    });
    return { accessToken, refreshToken };
  }

  verifyLoginToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (e) {
      return null;
    }
  }
}

module.exports = new JWTUtil();