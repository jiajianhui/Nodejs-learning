
// 需求——针对 /admin 和 /setting 的请求时，要求url携带 code=520 参数，如未携带显示 暗号错误

// 导入express
const express = require("express");

// 创建对象
const app = express();

// 1、创建中间件函数
let checkCode = (req, res, next) => {
    // 2、判断 url 中code参数是否为 520
    if (req.query.code === "520") {
        next()
    } else {
      res.send("暗号错误");
    }
}

// 创建路由
app.get("/home", (req, res) => {
  res.send("home");
});


// 3、在相应的路由规则中使用
app.get("/admin", checkCode, (req, res) => {
    res.send("admin");
});

app.get("/setting", checkCode, (req, res) => {
  res.send("setting");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
