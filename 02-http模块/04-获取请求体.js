// 1、导入http模块
const http = require("http");

// 2、创建服务对象
const server = http.createServer((req, res) => {

    // 1、声明一个变量
    let body = ''

    // 2、绑定data事件
    req.on('data', chunk => {  //可读流对象，chunk为每次读出的一部分
      body += chunk;
    })

    // 3、绑定end事件
    req.on('end', () => {  //数据取完之后触发的事件
        console.log(body);
        
        // 响应体
        res.end('hello')
    })
});

// 3、监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});


// ******注意get的请求体是空的，科借助02-form.html（post请求）来给此服务发请求******