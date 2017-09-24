var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntityUserMentionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // @xxx
  screen_name: {
    type: String,
    required: true
  },
  indices: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('EntityUserMention', EntityUserMentionSchema);