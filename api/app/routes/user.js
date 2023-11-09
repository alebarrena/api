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

router.post('/login', async (req, res) => {
console.log(req.body);
  
  res.header('auth-token', token).json({
      error: null,
      data: {token}
  })
})

module.exports = router