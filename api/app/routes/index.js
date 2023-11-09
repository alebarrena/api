const verifyToken = require('./validate-token');
var router = require('express').Router()
  var user = require('./user')

  router.use('/user', verifyToken, user)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router