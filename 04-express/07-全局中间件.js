
// 需求——记录每次访问时的url和ip

// 导入express
const express = require("express");

// 1、导入fs、path模块
const fs = require('fs')
const path = require("path");

// 创建对象
const app = express();

// 2、创建中间件函数
function record(req, res, next) {
  // 获取url、ip
  let { url, ip } = req;
  // 将信息保存在access.log中
  fs.appendFileSync(path.resolve(__dirname, "./access.log"), `${url} ${ip} \r\n`); //使用path的绝对路径

  next()
}

// 3、使用中间件
app.use(record)


// 创建路由
app.get("/home", (req, res) => {
  res.send("home");
});

app.get("/me", (req, res) => {
  res.send("me");
});
app.get("*", (req, res) => {
  res.send("<h1>404 not found</h1>");
});
// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
