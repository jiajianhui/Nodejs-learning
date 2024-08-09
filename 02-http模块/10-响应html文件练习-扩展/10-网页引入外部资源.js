//导入http模块
const http = require("http");

//导入fs模块
const fs = require("fs");

//创建服务对象
const server = http.createServer((req, res) => {

  // *****在html文件中引入css和js文件时，浏览器就会想服务器发送请求，但是响应内容仍是html，因此要根据请求路径响应不同的内容*****

  // 1、获取请求路径
  let { pathname } = new URL(req.url, 'http://127.0.0.1')

  
  // 2、更具请求路径的不同，响应不同的结果
  if (pathname === "/") {
    //读取文件内容
    let html = fs.readFileSync(__dirname + "/10-table.html");
    res.end(html); //end方法的参数，可以是buffer和字符串

  } else if (pathname === "/index.css") {
    let css = fs.readFileSync(__dirname + "/index.css");
    res.end(css);

  } else if (pathname === "/index.js") {
    let js = fs.readFileSync(__dirname + "/index.js");
    res.end(js);

  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
});

//监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
