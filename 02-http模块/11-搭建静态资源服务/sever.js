//导入http模块
const http = require("http");

//导入fs模块
const fs = require("fs");
const path = require('path')

// 声明mimes对象
let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json",
};

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

    // 获取文件后缀名
    let ext = path.extname(filePath).slice(1)
    // 获取对应类型
    let type = mimes[ext]
    if (type) {
        // 匹配到
        if (ext === 'html') {  //设置字符集，解决乱码问题
            res.setHeader("content-type", type + ';chartset=utf-8');
        } else {
            res.setHeader("content-type", type);
        }
    } else {
        // 没匹配到
        res.setHeader("content-type", "application/octet-stream");  //浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 下载 效果
    }
    

    // 响应文件内容
    res.end(data);
    
  });

  
});

//监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
