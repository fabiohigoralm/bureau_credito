require('dotenv/config');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const loginVerify = require('../utils/loginSchema');
const { loginService } = require('../service/loginService');

const login = rescue(async (req, res, next) => {
  const { error } = loginVerify.validate(req.body);
  if (error)next(error);
  const {
    _id, fullName, email, role,
  } = await loginService(req.body);

  const payload = {
    _id, fullName, email, role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.status(200).json({ token });
});
module.exports = { login };
