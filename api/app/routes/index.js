const verifyToken = require('./validate-token');
var router = require('express').Router()
  var user = require('./user')
  var auth = require('./auth')
  var product = require('./product')
  var image = require('./image')

  router.use('/user', verifyToken, user)
  router.use('/auth', auth)
  router.use('/product', product)
  router.use('/image', image)
  router.use('/order', image)



  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router