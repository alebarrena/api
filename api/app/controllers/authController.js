const conexion = require('../db.js')
module.exports = {


login: function (req,res){
  console.log(req.body);
  const token = jwt.sign(
    {
      email: req.body.email,
      clave: req.body.clave,
    },
    process.env.TOKEN_SECRET
      );  

    var clave= await(new Promise((resolve,reject)=>{
      var sql="SELECT * FROM user where da_email = '"+req.body.email+"'"
           console.log(sql)
           conexion.query(sql, function (error, results, fields) {
             resolve(results[0].da_clave)
           });
     }));      

     if (clave==req.body.clave){
        res.header('auth-token', token).json({
            error: null,
            data: {token}
        })
      }else{
        res.header('auth-token', token).json({
          error: {codigo:1,mensaje:'La clave no corresponde'},
          data: null
      })

      }

  
},
show: function(req, res) {
  var id = req.params.id

  conexion.query('SELECT * FROM user where id_user='+id, function (error, results, fields) {

        return res.json(results)
  });


},
updatekey: function(req, res) {
  var id = req.params.id
  var key = req.params.key

  conexion.query('update user set da_clave='+key+' where id_user='+id, function (error, results, fields) {

        return res.json(results)
  });


},
register: function(req, res) {
  var name = req.body.name
  var sql
  sql="insert into user (da_nombre) values ('"+name+"')"
  conexion.query(sql, function (error, results, fields) {

    return res.json(results)
});

}
}