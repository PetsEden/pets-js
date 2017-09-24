var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'x']
  },
  bio: {
    type: String
  }
});

// var id: String?
//     var screen_name: String?
//     var description: String?
//     var favourites_count: Int?
//     var followers_count: Int?
//     var friends_count: Int?
//     var statuses_count: Int?
//     var lang: String?
//     var profile_image_url: String?    //头像图片
//     var profile_background_image_url: String?
//     var status: Tweet?    //最近的weibo
//     var created_at: String?
//     var url: String?      //用户博客地址
//     var entities: Entity?

module.exports = mongoose.model('User', UserSchema);