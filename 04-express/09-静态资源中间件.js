// 导入express
const express = require("express");

// 创建对象
const app = express();

// 1、静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get("/", (req, res) => {
  res.end("hello express!");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});


// 注意事项
// 1、index.html文件为默认打开的资源
// 2、静态资源与路由规则同时匹配时，谁在上面就响应谁