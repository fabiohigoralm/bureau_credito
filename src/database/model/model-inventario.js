const mongoose = require('../config/connection');

const InventarioSchema = new mongoose.Schema({
  descricaoPatrimonio: {
    type: String,
    require: true,
  },
  valorMedio: {
    type: Number,
    require: true,
  },
  apartirDoAno: {
    type: Number,
    require: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Inventario', InventarioSchema);
