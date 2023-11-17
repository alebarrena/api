const jwt = require('jsonwebtoken');
var router = require('express').Router()
var orderController = require ('../controllers/orderController')


router.get('/order/search/:name', function(req, res) {
  orderController.search(req, res)
})
router.get('/order/list', function(req, res) {
  orderController.list(req, res)
})
router.get('/order/:id', function(req, res) {
  orderController.show(req, res)
})
router.post('/order', function(req, res) {
  orderController.create(req, res)
})
router.put('/order', function(req, res) {
  orderController.update(req, res)
})
router.delete('/order', function(req, res) {
  orderController.remove(req, res)
})


module.exports = router