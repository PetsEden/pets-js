var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserEntitySchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: 'Tweet',
    required: true
  },
  reply_comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }
});

module.exports = mongoose.model('UserEntity', UserEntitySchema);