var Tweet = require('../models/Tweet');
var errorcode = require('./errorcode');

var postTweet = function (req, res) {
  var tweet = new Tweet();
  tweet.text = req.body.text;
  tweet.type = req.body.type;
  tweet.save(function (err) {
    if (err) {
      res.json({
        code : errorcode.tweet_error[0],
        message: errorcode.tweet_error[1],
        data: err
      });
      return;
    }
    res.json({
      code: errorcode.ok[0],
      message: errorcode.ok[1],
    });
  });
};

// var getPets = function (req, res) {
//   Pet.find(function (err, pets) {
//     if (err) {
//       res.json({
//         code : errorcode.pet_error[0],
//         message: errorcode.pet_error[1],
//         data: err
//       });
//       return;
//     }
//     res.json({
//       code: errorcode.ok[0],
//       message: errorcode.ok[1],
//       data: pets
//     });
//   });
// };

// var getPet = function (req, res) {
//   Pet.findById(req.params.id, function (err, pet) {
//     if (err) {
//       res.json({
//         code : errorcode.pet_error[0],
//         message: errorcode.pet_error[1],
//         data: err
//       });
//       return;
//     }
//     res.json({
//       code: errorcode.ok[0],
//       message: errorcode.ok[1],
//       data: pet
//     });
//   });
// };

// var updatePet = function (req, res) {
//   Pet.findById(req.params.pet_id, function (err, pet) {
//     if (err) {
//       res.json({
//         code : errorcode.pet_error[0],
//         message: errorcode.pet_error[1],
//         data: err
//       });
//       return;
//     }
//     pet.quantity = req.params.quantity;
//     pet.save(function (err) {
//       if (err) {
//         res.json({
//           code : errorcode.pet_error[0],
//           message: errorcode.pet_error[1],
//           data: err
//         });
//         return;
//       }
//       res.json({
//         code: errorcode.ok[0],
//         message: errorcode.ok[1],
//         data: pet
//       });
//     });
//   });
// };

// var deletePet = function (req, res) {
//   Pet.findByIdAndRemove(req.params.pet_id, function (err) {
//     if (err) {
//       res.json({
//         code : errorcode.pet_error[0],
//         message: errorcode.pet_error[1],
//         data: err
//       });
//       return;
//     }
//     res.json({
//       code: errorcode.ok[0],
//       message: errorcode.ok[1],
//       data: {}
//     });
//   });
// }

module.exports = {
  postTweet: postTweet
  // getPets: getPets,
  // getPet: getPet,
  // updatePet: updatePet,
  // deletePet: deletePet
};