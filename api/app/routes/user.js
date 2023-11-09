const jwt = require('jsonwebtoken');
var router = require('express').Router()
var userController = require ('../controllers/userController')


router.get('/search', function(req, res) {
  userController.search(req, res)
})
router.get('/', function(req, res) {
  userController.list(req, res)
})
router.get('/:id', function(req, res) {
  userController.show(req, res)
})
router.post('/', function(req, res) {
  userController.create(req, res)
})
router.put('/:id', function(req, res) {
  userController.update(req, res)
})
router.delete('/:id', function(req, res) {
  userController.remove(req, res)
})


module.exports = router