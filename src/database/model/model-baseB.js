const mongoose = require('../config/connection');

const BaseBschema = new mongoose.Schema({
  idade: {
    type: Number,
    require: true,
  },
  listaBens: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Inventario',
  }],
  fonteDeRenda: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'FonteRenda',
  }],
  user_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'BaseA',
  },
}, { versionKey: false });

module.exports = mongoose.model('BaseB', BaseBschema);
