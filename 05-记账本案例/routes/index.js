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

// 新增账单
router.post("/accountList", function (req, res, next) {
  // 获取请求体数据
  console.log(req.body);
  res.send('添加成功')
});

module.exports = router;
