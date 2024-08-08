// 导入http模块
const http = require("http");

// 1、导入url模块
const url = require('url')

// 创建服务对象
const server = http.createServer((req, res) => {
  // 2、解析req.url
  let resUrl = url.parse(req.url, true); //parsed的第二个属性设置为true的话，query属性将会由字符创变为对象

  // console.log(resUrl);

  // 请求路径
  let pathName = resUrl.pathname;
  console.log(pathName);
  

  // 查询字符串
  let query = resUrl.query.keyword;
  console.log(query);
  

  res.end("url");
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});


// ******注意get的请求体是空的，科借助02-form.html（post请求）来给此服务发请求******