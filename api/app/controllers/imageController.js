const conexion = require('../db.js')
module.exports = {
search: function (req, res) {
  var producto = req.params.product
    conexion.query("SELECT * FROM images where id_producto = "+producto, function (error, results, fields) {
        return res.json(results)
    });

    
},
show: function(req, res) {
  var id = req.params.id

  conexion.query('SELECT * FROM images where id_image='+id, function (error, results, fields) {

        return res.json(results)
  });


},
create: function(req, res) {
  var descripcion = req.body.description
  var imagen = req.body.image
  var producto = req.body.product
  var sql
  sql="insert into images (da_descripcion, da_imagen, id_producto) values ('"+descripcion+"','"+imagen+"','"+producto+"')"
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});

},
remove: function(req, res) {
  var id = req.body.id

  var sql
  sql="delete from images where id_imagen="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
}
}