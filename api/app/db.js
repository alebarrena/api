var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'pagaste',
    user : 'root',
    password : '',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});


module.exports = conexion;