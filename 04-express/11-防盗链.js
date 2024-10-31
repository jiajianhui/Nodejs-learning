// 导入express
const express = require("express");

// 创建对象
const app = express();

app.use((req, res, next) => {

    // 1、获取请求头中的referer属性
    const referer = req.get('referer')

    if (referer) {  //referer可能为空，html第一次发请求其实没有referer值
      // 2、实例化
      let url = new URL(referer);  //referer是协议+域名+端口

      //3、获取 hostname
      let hostname = url.hostname; //提取域名

      //4、判断
      if (hostname !== "127.0.0.1") {
        res.status(404).send("404 not found");
        return;
      }
    }
    next();
})

// 静态资源中间件设置
// 当浏览器把请求发送过来之后，服务端就会到这个文件夹中寻找对应的文件，读取文件，然后再响应文件内容；默认路径为/（根）时，会自动寻找index.html
app.use(express.static(__dirname + "/public"));


// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
