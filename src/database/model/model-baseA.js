const mongoose = require('../config/connection');

const BaseAschema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  endereco: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Endereco',
  }],
  dividas: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Divida',
  }],
}, {
  versionKey: false,
  // timestamps: true,
});

module.exports = mongoose.model('BaseA', BaseAschema);
