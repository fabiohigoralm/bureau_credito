const boom = require('@hapi/boom');
const user = require('../../database/model/model-user');

const loginService = async ({ email, password }) => {
  const login = await user.findOne({ email, password });
  if (!login) throw boom.notFound('Email or password does not exist');
  return login;
};

module.exports = { loginService };
