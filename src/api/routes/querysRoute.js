const express = require('express');
const { jwtValidate } = require('../middlewares/jwtValidation');
const { isAdmin } = require('../middlewares/isAdmin');
const {
  baseA, baseB, baseC, allBases,
} = require('../controllers/queryController');

const router = express.Router();
router.get('/all', jwtValidate, isAdmin, allBases);
router.get('/basea/:cpf', jwtValidate, baseA);
router.get('/baseb/:cpf', jwtValidate, baseB);
router.get('/basec/:cpf', jwtValidate, baseC);

module.exports = router;
