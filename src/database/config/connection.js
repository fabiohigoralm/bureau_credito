const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bureau_credito_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
