const conexion = require('../db.js')
module.exports = {
search: function (req, res) {
  var name = req.params.name
    conexion.query("SELECT * FROM user where da_nombre like '%"+name+"%'", function (error, results, fields) {
        return res.json(results)
    });

    
},
list: function(req, res) {
  conexion.query('SELECT * FROM user', function (error, results, fields) {
    return res.json(results)
});
},
show: function(req, res) {
  var id = req.params.id

  conexion.query('SELECT * FROM user where id_user='+id, function (error, results, fields) {

        return res.json(results)
  });


},
create: function(req, res) {
  var name = req.body.name
  var sql
  sql="insert into user (da_nombre) values ('"+name+"')"
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});

},
update: function(req, res) {
  var id = req.body.id
  var name = req.body.name
  var sql
  sql="update user set da_nombre ='"+name+"' where id_user="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
},
remove: function(req, res) {
  var id = req.body.id

  var sql
  sql="delete from user where id_user="+id
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});
}
}