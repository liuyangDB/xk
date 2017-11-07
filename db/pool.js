let mysql = require('mysql');
let pool = global.pool;
if(!pool){
  pool = mysql.createPool({
    database: 'web1702',
    user: 'root',
    password: 'root'
  });
  global.pool = pool;
}
function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(err){
        reject(err);
      } else {
        resolve(conn);
      }
    })
  });
}

function execute(sql){
  return new Promise(function(resolve,reject){
    let connection = 0;
    getConnection().then(function(conn){
      connection = conn;
      conn.query(sql,function(err,results){
        if(err){
          reject(err);
        } else {
          resolve(results);
        }
      })
    }).catch(function(err){
      reject(err);
    }).finally(function(){
      if(connection){
        connection.release();
        console.log('释放成功');
      }
    })
  })
}

module.exports = {
  execute
}

