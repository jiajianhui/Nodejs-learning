var express = require('express');
var router = express.Router();

// 账单列表
router.get('/accountList', function(req, res, next) {
  res.render('list')
});
// 添加账单
router.get("/accountList/creatAccount", function (req, res, next) {
  res.render("creat");
});

module.exports = router;
