var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntityHashtagSchema = new Schema({
  // $xxx
  text: {
    type: String,
    required: true
  },
  indices: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('EntityHashtag', EntityHashtagSchema);