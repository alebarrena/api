const jwt = require('jsonwebtoken');
var router = require('express').Router()
var imageController = require ('../controllers/imageController')


router.get('/image/:id', function(req, res) {
  imageController.show(req, res)
})
router.post('/image', function(req, res) {
  imageController.create(req, res)
})
router.delete('/image', function(req, res) {
  imageController.remove(req, res)
})


module.exports = router