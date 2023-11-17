const jwt = require('jsonwebtoken');
var router = require('express').Router()
var authController = require ('../controllers/authController')


router.post('/login', function(req, res) {
  authController.login(req, res)
})
router.get('/:id', function(req, res) {
  authController.show(req, res)
})
router.post('/register', function(req, res) {
  userController.register(req, res)
})
router.post('/updatekey', function(req, res) {
  userController.updatekey(req, res)
})

module.exports = router