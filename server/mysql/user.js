var mysqlQuery = require('./index');

var findAdminSql = 'select * from user where delstatus = 0';
var findAdmin = function (callback) {
  mysqlQuery(findAdminSql, callback);
};

var updatePasswordSql = 'UPDATE user SET password = ? WHERE user_name = ?';
var changePassword = function (params, callback) {
  mysqlQuery(updatePasswordSql, callback, params);
};
module.exports = { findAdmin, changePassword };