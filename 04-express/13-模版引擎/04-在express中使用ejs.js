// 导入express
const express = require("express");

const path = require('path')

// 创建对象
const app = express();

// 1、设置要使用的模版引擎
app.set('view engine', 'ejs')
// 2、设置模版文件存放位置    模版文件——具有模版语法内容的文件   后缀为模板引擎后缀
app.set('views', path.resolve(__dirname, './views'))

// 创建路由
app.get("/home", (req, res) => {
    // 3、render响应
    // res.render('模版文件名', {数据})
    let title = 'ejs'
    res.render('home', {title})
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
