// 导入express
const express = require("express");

// 1、导入路由模块
const homeRouter = require('./routers/homeRouter')
const adminRouter = require('./routers/adminRouter')

// 创建对象
const app = express();


// 2、使用路由
app.use(homeRouter)
app.use(adminRouter)



// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});

