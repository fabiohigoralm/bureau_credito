const rescue = require('express-rescue');
const {
  queryBaseA, queryBaseB, queryBaseC, queryAllBases,
} = require('../service/querysService');

const baseA = rescue(async (req, res) => {
  const { cpf } = req.params;
  const response = await queryBaseA(cpf);
  res.status(200).json(response);
});

const baseB = rescue(async (req, res) => {
  const { cpf } = req.params;
  const response = await queryBaseB(cpf);
  res.status(200).json(response);
});

const baseC = rescue(async (req, res) => {
  const { cpf } = req.params;
  const response = await queryBaseC(cpf);
  res.status(200).json(response);
});

const allBases = rescue(async (req, res) => {
  const response = await queryAllBases();
  res.status(200).json(response);
});

module.exports = {
  baseA, baseB, baseC, allBases,
};
