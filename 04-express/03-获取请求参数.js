// 导入express
const express = require("express");

// 创建对象
const app = express();

// 创建路由
app.get("/", (req, res) => {

  // 原生操作
//   console.log(req.method);
//   console.log(req.url);
//   console.log(req.httpVersion);
//   console.log(req.headers);

  //express操作
  //1、获取路径、查询参数
  console.log(req.path);
  console.log(req.query);
  //2、获取ip
  console.log(req.ip);
  //3、获取请求头中的某一个属性值
  console.log(req.get('host'));
  
  
  
    
  res.end("hello express!");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
