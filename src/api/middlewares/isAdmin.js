const rescue = require('express-rescue');
const boom = require('@hapi/boom');

const isAdmin = rescue(async (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') {
    throw boom.unauthorized('User without access');
  }
  next();
});

module.exports = { isAdmin };
