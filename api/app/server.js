var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})
app.post('/login', async (req, res) => {
    console.log(req.body);
    const token = jwt.sign(
      {
        username: 'hola',
        id: '1',
      },
      'secreto'
        );  
    
      res.header('auth-token', token).json({
          error: null,
          data: {token}
      })
    })
// iniciamos nuestro servidor

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router()             

//establecemos nuestra primera ruta, mediante get.
router.get('/:nombre', function(req, res) {
    res.json({ mensaje: '¡Hola ' + req.params.nombre })   
  })

router.get('/cervezas/:nombre', function(req, res) {
    res.json({ mensaje: '¡Hola cerveza ' + req.params.nombre })   
  })  
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/',function(req,res) { 
  res.json({mensaje: req.body.nombre})  
})


    
app.listen(port)
console.log('API escuchando en el puerto ' + port)
