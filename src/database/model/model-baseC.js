const mongoose = require('../config/connection');

const BaseCschema = new mongoose.Schema({
  ultimaConsultaCpf: {
    type: Date,
    require: true,
    default: '2020-05-02',
  },
  movimentacao: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Movimentacao',
  }],
  ultimaCompraCpf: {
    type: Date,
    require: true,
    default: '2021-06-20',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'BaseA',
  },
}, { versionKey: false });

module.exports = mongoose.model('BaseC', BaseCschema);
