const conexion = require('../db.js')
module.exports = {
search: function (req, res) {
  var name = req.params.name
    conexion.query("SELECT * FROM products where da_nombre like '%"+name+"%'", function (error, results, fields) {
        return res.json(results)
    });

    
},
list: function(req, res) {
  conexion.query('SELECT * FROM products', function (error, results, fields) {
    return res.json(results)
});
},
show: function(req, res) {
  var id = req.params.id

  conexion.query('SELECT * FROM products where id_producto='+id, function (error, results, fields) {

        return res.json(results)
  });


},
create: function(req, res) {
  var name = req.body.name
  var categoria = req.body.category
  var stock = req.body.stock
  var precio = req.body.price
  var costo = req.body.cost
  var almacen = req.body.store
  var codigo = req.body.code
  var sql
  sql="insert into products (da_nombre, id_categoria, da_stock,da_precio,da_costo,id_store,da_codigo) values ('"+name+"','"+categoria+"','"+stock+"','"+precio+"','"+costo+"','"+almacen+"','"+codigo+"')"
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});

},
update: function(req, res) {
  var id = req.body.id
  var name = req.body.name
  var categoria = req.body.category
  var stock = req.body.stock
  var precio = req.body.price
  var costo = req.body.cost
  var almacen = req.body.store
  var codigo = req.body.code
  var sql
  sql="update products set da_nombre ='"+name+"',da_categoria='"+categoria+"',da_stock='"+stock+"',da_precio='"+precio+"',da_costo='"+costo+"',id_store='"+almacen+"',da_codigo='"+codigo+"' where id_producto="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
},
remove: function(req, res) {
  var id = req.body.id

  var sql
  sql="delete from products where id_producto="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
}
}