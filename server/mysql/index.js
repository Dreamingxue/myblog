
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'jmx'
});
connection.connect((error) => {
  console.error('connect failed');
  console.log(error);
});

var mysqlQuery = function (sql, callback, params) {
  if (params) {
    connection.query(sql, params, function (error, data) {
      if (error) {
        console.error('error');
        console.error(error);
        callback(null);
      }
      console.log(data);
      callback(data);
    })
  } else {
    connection.query(sql, function (error, data) {
      if (error) {
        console.error('error');
        console.error(error);
        callback(null);
      }
      console.log(data);
      callback(data);
    })
  }
}

module.exports = mysqlQuery;