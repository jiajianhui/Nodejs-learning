// 导入express
const express = require("express");

// 1、导入json文件
const {singers} = require('./singers.json')  //通过解构赋值，将其转变为数组

// 创建对象
const app = express();

// 创建路由
app.get("/singer/:id", (req, res) => {
  // 2、获取路由路径
  let id = req.params.id; //注意这里的路由路径是字符串，后面要将其转化为数字，方便就行比较

  // 3、通过find方法找到对应id的数据
  let result = singers.find((item) => {
    if (item.id === Number(id)) {
      //强制类型转换为数字
      return true;
    }
  });

  //4、判断result为undefined，就返回404
  if (!result) {
    res.statusCode = 404;
    res.end("<h1>NOT FOUND</h1>");
    return;
  }

  console.log(result);

  //5、将result渲染到页面上
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${result.singer_name}</h1>
        <img src="${result.singer_pic}" alt="">
        
    </body>
    </html>
    `);
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
