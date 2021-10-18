const mongoose = require('../config/connection');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema);
