router.get('/myCount', function(req, res, next) {
  Article.find().then((data)=>{
    //console.log('------',data)
    res.send(data)
  },(err)=>{
    res.send('查找失败')
  })
});

var mysqlQuery = require('./index');

var myCountSql = 'select count(*) from attical where delstatus = 0';
var myArticleCount = function (callback) {
  mysqlQuery(myCountSql, callback);
};

var addArticleSql = 'insert into article (';
var addArticle = function (callback, params) {
  let keys = '';
  let values = '';
  let paramsArr = [];
  Object.keys(params).map(key => {
    keys += key + ',';
    values += '?,';
    paramsArr.push(params[key]);
  });
  addArticleSql += keys.substr(keys.length -1) + ') values (' + values.substr(values.length-1) + ')';
  mysqlQuery(addArticleSql, callback, paramsArr);
};

var updateArticleSql = 'update article set article_title = ?, checkedType = ? ,keyword =?, content = ? where id = ?)';
var updateArticle = function (callback, params) {
  let paramsArr = [];
  Object.keys(params).map(key => {
    if (key !== 'id') {
      updateArticleSql += key + ' = ? ,';
      paramsArr.push(params[key]);
    }
  });
  paramsArr.push(params[id]);
  updateArticleSql = updateArticleSql.substr(updateArticleSql.length -1)+ 'where id = ?'
  mysqlQuery(updateArticleSql, callback, paramsArr);
};

var removeArticleSql = 'update article set delstatus = 1 where id = ?';
var removeArticle = function (callback, params) {
  mysqlQuery(removeArticleSql, callback, params);
};

var searchArticleSql = 'select * from  article where delstatus = 0 ';
var searchArticle = function (callback, params) {
  let paramsArr = [];
  Object.keys(params).map(key => {
    paramsArr.push(params[key]);
    searchArticleSql += 'and ' + key + ' = ? '
  });

  mysqlQuery(searchArticleSql, callback, paramsArr);
};

module.exports = { myArticleCount, addArticle, updateArticle, removeArticle };
