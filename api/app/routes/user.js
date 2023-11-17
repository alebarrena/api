const jwt = require('jsonwebtoken');
var router = require('express').Router()
var userController = require ('../controllers/userController')


router.get('/user/search/:name', function(req, res) {
  userController.search(req, res)
})
router.get('/user/list', function(req, res) {
  userController.list(req, res)
})
router.get('/user/:id', function(req, res) {
  userController.show(req, res)
})
router.post('/user', function(req, res) {
  userController.create(req, res)
})
router.put('/user', function(req, res) {
  userController.update(req, res)
})
router.delete('/', function(req, res) {
  userController.remove(req, res)
})


module.exports = router