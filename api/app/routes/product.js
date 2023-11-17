const jwt = require('jsonwebtoken');
var router = require('express').Router()
var productController = require ('../controllers/productController')


router.get('/product/search/:name', function(req, res) {
  productController.search(req, res)
})
router.get('/product/list', function(req, res) {
  productController.list(req, res)
})
router.get('/product/:id', function(req, res) {
  productController.show(req, res)
})
router.post('/product', function(req, res) {
  productController.create(req, res)
})
router.put('/product', function(req, res) {
  productController.update(req, res)
})
router.delete('/product', function(req, res) {
  productController.remove(req, res)
})


module.exports = router