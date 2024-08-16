// 1、导入express
const express = require('express')

// 2、创建路由对象
const router = express.Router()

// 3、创建路由规则
router.get("/home", (req, res) => {
  res.send("home");
});

router.get("/search", (req, res) => {
  res.send("search");
});

// 4、暴露router
module.exports = router