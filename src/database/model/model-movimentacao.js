const mongoose = require('../config/connection');

const MovimentacaoSchema = new mongoose.Schema({
  descricaoCompra: {
    type: String,
    require: true,
  },
  valorCompra: {
    type: Number,
    require: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Movimentacao', MovimentacaoSchema);
