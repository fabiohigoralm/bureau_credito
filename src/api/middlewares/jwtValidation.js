const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const rescue = require('express-rescue');
require('dotenv/config');

const jwtValidate = rescue(async (req, res, next) => {
  const token_full = req.headers.authorization;
  if (!token_full) throw boom.unauthorized('Token not found');
  const [, token] = token_full.split(' ');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(req.user);
    if (decoded) next();
  } catch (e) {
    throw boom.unauthorized('Expired or invalid token');
  }
});
module.exports = {
  jwtValidate,
};
