// 导入express
const express = require("express");

// 创建对象
const app = express();

// 创建路由
app.get("/:id", (req, res) => {  //:id为占位符
    
  //获取URL路由路径
  console.log(req.params.id);  //params后面的参数要与上面占位符名称（id）保持一致

  res.end("hello express!");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
