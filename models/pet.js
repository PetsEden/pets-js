var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  quantity: Number
});

module.exports = mongoose.model('Pet', PetSchema);