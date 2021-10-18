const mongoose = require('../config/connection');

const RendaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  valorMedioRenda: {
    type: Number,
    require: true,
  },
  primeiroAnoRenda: {
    type: Number,
    require: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('FonteRenda', RendaSchema);
