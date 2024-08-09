//导入http模块
const http = require("http");

//导入fs模块
const fs = require("fs");

//创建服务对象
const server = http.createServer((req, res) => {
  // *****在html文件中引入css和js文件时，浏览器就会想服务器发送请求，但是响应内容仍是html，因此要根据请求路径响应不同的内容*****

  // 1、获取请求路径
  let { pathname } = new URL(req.url, "http://127.0.0.1");

  // 2、拼接文件路径
  let filePath = __dirname + '/pages' + pathname

  // 3、读取文件路径，若有就响应该文件内容
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("404 Not Found");
      return;
    }

    // 响应文件内容
    res.end(data);
    
  });

  
});

//监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
