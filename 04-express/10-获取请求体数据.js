// 导入express
const express = require("express");

// 1、导入bodyParser模块
const bodyParser = require("body-parser");

// 创建对象
const app = express();

// 解析 json 格式请求体的中间件
// var jsonParser = bodyParser.json()

// 2、解析 查询字符串（querystring） 格式请求体的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建路由
app.get("/login", (req, res) => {
  //3、响应html
  res.sendFile(__dirname + '/10-form.html')
});

app.post("/login", urlencodedParser, (req, res) => {
  //4、获取账号密码
  console.log(req.body); //当中间件函数执行完毕后，会往请求对象（req）身上添加一个属性，名字叫body

  res.send("获取请求体数据");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
