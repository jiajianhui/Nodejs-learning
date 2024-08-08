// 导入http模块
const http = require("http");

// 创建服务对象
const server = http.createServer((req, res) => {
  // 1、实例化URL对象
  let url = new URL(req.url, 'http://127.0.0.1')  //第一项参数为请求路径与查询字符串、第二项参数为域名或ip
  // console.log(url);

  // 路径
  console.log(url.pathname);
  
  // 查询字符串
  console.log(url.searchParams.get('keyword'));
  
  

  res.end("url new");
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});


// ******注意get的请求体是空的，科借助02-form.html（post请求）来给此服务发请求******