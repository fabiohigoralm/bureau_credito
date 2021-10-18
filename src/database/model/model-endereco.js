const mongoose = require('../config/connection');

const EnderecoSchema = new mongoose.Schema({
  rua: {
    type: String,
    require: true,
  },
  numero: {
    type: Number,
    require: true,
  },
  bairro: {
    type: String,
    require: true,
  },
  cidade: {
    type: String,
    require: true,
  },
  estado: {
    type: String,
    require: true,
  },
  cep: {
    type: Number,
    require: true,
  },

}, { versionKey: false });

module.exports = mongoose.model('Endereco', EnderecoSchema);
