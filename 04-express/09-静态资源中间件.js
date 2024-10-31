// 导入express
const express = require("express");

// 创建对象
const app = express();

// 1、静态资源中间件设置
//static的参数就是静态资源文件夹的路径——public就是网站服务的根目录
// 当浏览器把请求发送过来之后，服务端就会到这个文件夹中寻找对应的文件，读取文件，然后再响应文件内容；默认路径为/（根）时，会自动寻找index.html
app.use(express.static(__dirname + '/public'))  

// 创建路由
app.get("/", (req, res) => {
  res.end("hello express!");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});


// 注意事项
// 1、index.html文件为默认打开的资源
// 2、静态资源与路由规则同时匹配时，谁在上面就响应谁
// 3、路由响应动态资源（搜索结果、排行榜、新闻等），静态资源中间件响应静态资源（图片、视频、css、js等）