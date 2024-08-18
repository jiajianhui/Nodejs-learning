var express = require('express');
var router = express.Router();

// 账单列表
router.get('/accountList', function(req, res, next) {
  res.send("账单列表");
});
// 添加账单
router.get('/creatAccount', function(req, res, next) {
  res.send("添加账单");
});

module.exports = router;
