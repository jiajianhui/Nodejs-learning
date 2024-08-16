// 1、导入express
const express = require("express");

// 2、创建路由对象
const router = express.Router();

// 3、创建路由规则
router.get("/setting", (req, res) => {
  res.send("setting");
});

router.get("/admin", (req, res) => {
  res.send("admin");
});

// 4、暴露router
module.exports = router;
