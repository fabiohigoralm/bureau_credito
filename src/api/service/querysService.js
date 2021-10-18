// const boom = require('@hapi/boom');
const boom = require('@hapi/boom');
const BaseA = require('../../database/model/model-baseA');
const BaseB = require('../../database/model/model-baseB');
const BaseC = require('../../database/model/model-baseC');
require('../../database/model/model-endereco');
require('../../database/model/model-divida');
require('../../database/model/model-inventario');
require('../../database/model/model-fonteRenda');
require('../../database/model/model-movimentacao');

const queryBaseA = async (cpf) => {
  const result = await BaseA.findOne({ cpf }).populate('endereco dividas', '-_id');

  if (!result) {
    throw boom.notFound('Cpf does not exist in database');
  }
  const {
    _id, nome, endereco, dividas,
  } = result;
  return {
    _id, nome, endereco, dividas,
  };
};

const queryBaseB = async (cpf) => {
  const { _id } = await queryBaseA(cpf);
  const result = await BaseB.findOne({ user_id: _id }).select('-_id -user_id').populate('listaBens fonteDeRenda', '-_id');
  return result;
};

const queryBaseC = async (cpf) => {
  const { _id } = await queryBaseA(cpf);
  const result = await BaseC.findOne({ user_id: _id }).select('-_id -user_id').populate('movimentacao', '-_id');
  return result;
};

const queryAllBases = async () => {
  const resultA = await BaseA.find().populate('endereco dividas', '-_id');
  const resultB = await BaseB.find().populate('listaBens fonteDeRenda', '-_id');
  const resultC = await BaseC.find().select('-_id -user_id').populate('movimentacao', '-_id');
  return { resultA, resultB, resultC };
};

module.exports = {
  queryBaseA, queryBaseB, queryBaseC, queryAllBases,
};
