var express = require('express');
var router = express.Router();
var petController = require('../../controllers/pet');

// POST /api/pets
router.post('/pets',function (req, res) {
  petController.postPet(req, res);
});

// GET /api/pets
router.get('/pets',function (req, res) {
  petController.getPets(req, res);
})

// GET /api/pets/:id
router.get('/pets/:id', function (req, res) {
  petController.getPet(req, res);
})

// DELETE /api/pets/:id
router.delete('/pets/:id', function (req, res) {
  petController.deletePet(req, res);
})

// PATCH /api/pets/{:id}
router.patch('/pets/:id', function (req, res) {
  petController.updatePet(req, res);
})

module.exports = router;