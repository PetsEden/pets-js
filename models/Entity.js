var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntitySchema = new Schema({
  hashtags: {
    type: [Schema.Types.ObjectId],
    ref: 'EntityHashtag'
  },
  symbols: {
    type: [Schema.Types.ObjectId],
    ref: 'EntitySymbol'
  },
  urls: {
    type: [Schema.Types.ObjectId],
    ref: 'EntityUrl'
  },
  user_mentions: {
    type: [Schema.Types.ObjectId],
    ref: 'EntityUserMention'
  },
  media: {
    type: [Schema.Types.ObjectId],
    ref: 'EntityMedia'
  },
  extended_entities: {
    type: [Schema.Types.ObjectId],
    ref: 'EntityExtend'
  }
});

module.exports = mongoose.model('Entity', EntitySchema);