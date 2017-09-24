// var favorited: Bool?      //是否已收藏

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  favorite_count: {
    type: Number,
    required: true,
    default: 0
  },
  entities: {
    type: Schema.Types.Mixed
  },
  comments_count: {
    type: Number,
    required: true,
    default: 0
  },
  coordinates: {
    type: String
  },
  retweeted_status: {
    type: Schema.Types.ObjectId,
    ref: 'Tweet',
  },
  retweet_count: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Tweet', TweetSchema);