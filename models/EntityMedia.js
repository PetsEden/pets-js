var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntityMediaSchema = new Schema({
  media_url: {
    type: String,
    required: true
  },
  // 短url
  url: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sizes: {
    type: Schema.Types.Mixed,
    required: true
  }
  // {
  //   "medium": {
  //     "w": 600,
  //     "h": 399,
  //     "resize": "fit"
  //   },
  //   "thumb": {
  //     "w": 150,
  //     "h": 150,
  //     "resize": "crop"
  //   },
  //   "small": {
  //     "w": 340,
  //     "h": 226,
  //     "resize": "fit"
  //   },
  //   "large": {
  //     "w": 800,
  //     "h": 532,
  //     "resize": "fit"
  //   }
  // }
});

module.exports = mongoose.model('EntityMedia', EntityMediaSchema);