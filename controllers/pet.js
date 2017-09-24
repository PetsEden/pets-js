var Pet = require('../models/Pet');
var errorcode = require('./errorcode');

var postPet = function (req, res) {
  var pet = new Pet();
  pet.name = req.body.name;
  pet.type = req.body.type;
  pet.quantity = req.body.quantity;
  pet.save(function (err) {
    if (err) {
      res.json({
        code : errorcode.pet_error[0],
        message: errorcode.pet_error[1],
        data: err
      });
      return;
    }
    res.json({
      code: errorcode.ok[0],
      message: errorcode.ok[1],
      data: pet
    });
  });
};

var getPets = function (req, res) {
  Pet.find(function (err, pets) {
    if (err) {
      res.json({
        code : errorcode.pet_error[0],
        message: errorcode.pet_error[1],
        data: err
      });
      return;
    }
    res.json({
      code: errorcode.ok[0],
      message: errorcode.ok[1],
      data: pets
    });
  });
};

var getPet = function (req, res) {
  Pet.findById(req.params.id, function (err, pet) {
    if (err) {
      res.json({
        code : errorcode.pet_error[0],
        message: errorcode.pet_error[1],
        data: err
      });
      return;
    }
    res.json({
      code: errorcode.ok[0],
      message: errorcode.ok[1],
      data: pet
    });
  });
};

var updatePet = function (req, res) {
  Pet.findById(req.params.pet_id, function (err, pet) {
    if (err) {
      res.json({
        code : errorcode.pet_error[0],
        message: errorcode.pet_error[1],
        data: err
      });
      return;
    }
    pet.quantity = req.params.quantity;
    pet.save(function (err) {
      if (err) {
        res.json({
          code : errorcode.pet_error[0],
          message: errorcode.pet_error[1],
          data: err
        });
        return;
      }
      res.json({
        code: errorcode.ok[0],
        message: errorcode.ok[1],
        data: pet
      });
    });
  });
};

var deletePet = function (req, res) {
  Pet.findByIdAndRemove(req.params.pet_id, function (err) {
    if (err) {
      res.json({
        code : errorcode.pet_error[0],
        message: errorcode.pet_error[1],
        data: err
      });
      return;
    }
    res.json({
      code: errorcode.ok[0],
      message: errorcode.ok[1],
      data: {}
    });
  });
}

module.exports = {
  postPet: postPet,
  getPets: getPets,
  getPet: getPet,
  updatePet: updatePet,
  deletePet: deletePet
};