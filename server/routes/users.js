var express = require('express');
var router = express.Router();
var path = require('path');
var result = require(path.join(__dirname, '../model/result.js'));
var { findAdmin, changePassword } = require(path.join(__dirname, '../mysql/user.js'));
// var Personal = require(path.join(__dirname, '../model/personal.js'))
/* GET users listing. */
//验证用户登录信息
router.get('/myadmin', function (req, res, next) {

  //console.log('----------',req.query.username)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  //发送过来的数据与数据库的信息进行判断
  if (req.query.username == '' || req.query.password == '') {
    res.send('用户名或密码不能为空')
  } else {
    findAdmin(function (data) {
      if (data) {
        // if (data.password == req.query.password) {
        result.m = '登录成功';
        result.d = data;
        res.send(result);
        // } else {
        //   //console.log(0);
        //   res.send('密码错误')
        // }
      } else {
        //console.log(1);
        res.send('用户名错误')
      }
    });
  }
});
//修改密码
router.get('/changePassword', (req, res) => {
  console.log(req.body)
  if (req.query.newPassword === req.query.confirmPassword) {
    changePassword([req.query.confirmPassword, 'admin'], function (data) {
      console.log(data);
      if (data) {
      }
      result.c = '0';
      result.m = '更新成功';
      res.send(result)
    });
  } else {
    result.m = '两次密码输入不一样，请重新输入';
    result.c = '-1';
    res.send(result);
  }
});

// //查询个人资料
router.get('/personal', (req, res) => {
  findAdmin((data) => {
    res.send(data[0])
  }, (err) => {
    res.send('个人资料查找失败')
  })
})
// //更改个人资料
// router.get('/changePersonal', (req, res) => {
//   //console.log('--------',req.query)
//   if (req.query.nick == '') {
//     res.send('昵称用于后台登陆，不能为空')
//   } else {
//     Personal.update({ _id: req.query._id }, { $set: req.query }).then((data) => {
//       //console.log('=====',data)
//       res.send('更改成功')
//     }, (err) => {
//       res.send('更改失败')
//     })
//   }

// }, (err) => {
//   res.send('更改失败')
// })

module.exports = router;
