const mongoose = require('../config/connection');

const DividaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  },
  anoDivida: {
    type: Number,
    require: true,
  },

}, { versionKey: false });

module.exports = mongoose.model('Divida', DividaSchema);
