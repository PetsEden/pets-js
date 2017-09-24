var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntityUrlSchema = new Schema({
  // 短url
  url: {
    type: String,
    required: true
  },
  display_url: {
    type: String,
    required: true
  },
  expanded_url: {
    type: String,
    required: true
  },
  indices: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('EntityUrl', EntityUrlSchema);