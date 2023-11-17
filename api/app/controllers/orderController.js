const conexion = require('../db.js')
module.exports = {
search: function (req, res) {
  var fecha = req.params.date
    conexion.query("SELECT * FROM orders where da_fecha = '%"+fecha+"%'", function (error, results, fields) {
        return res.json(results)
    });

    
},
list: function(req, res) {
  conexion.query('SELECT * FROM orders', function (error, results, fields) {
    return res.json(results)
});
},
show: function(req, res) {
  var id = req.params.id

  conexion.query('SELECT * FROM orders where id_order='+id, function (error, results, fields) {

        return res.json(results)
  });


},
create: function(req, res) {
  var fecha = req.body.date
  var ususario = req.body.user
  var sql
  sql="insert into orders (da_fecha, id_user) values ('"+fecha+"','"+usuario+"')"
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});

},
update: function(req, res) {
  var id = req.body.id
  var fecha = req.body.date
  var usuario = req.body.user
  var sql
  sql="update orders set da_fecha ='"+fecha+"',id_user='"+usuario+"' where id_orden="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
},
remove: function(req, res) {
  var id = req.body.id

  var sql
  sql="delete from orders where id_orden="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
}
}