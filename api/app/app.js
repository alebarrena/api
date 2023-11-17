var express = require('express') //llamamos a Express
const jwt = require('jsonwebtoken')
var app = express()       
var cors = require('cors')
var bodyParser = require('body-parser')        
require('dotenv').config()
const conexion = require('./db.js')
var port = process.env.PORT || 8080  // establecemos nuestro puerto


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes')

app.use(cors())

app.use('/api', router)


app.listen(port)
console.log('API escuchando en el puerto ' + port)

/*toda la configuración de bbdd la hacemos en un fichero a parte*/
