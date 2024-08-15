// 导入express
const express = require("express");

// 创建对象
const app = express();

// 创建路由
app.get("/response", (req, res) => {

    // 原生响应
    // res.statusCode = 404  //状态码
    // res.statusMessage = 'love'  //状态信息
    // res.setHeader('aaa', 'bbb')  //响应头
    // res.write('hello')  //响应体
    // res.end("response");


    // __________________________________________________________

    // express响应
    // res.status(200)
    // res.set('xxx', 'yyy')
    // res.send('你好')
    // res.status(200).set('xxx', 'yyy').send('你好')  //连写

    // express 其他响应
    // 1、重定向
    // res.redirect('http://google.com')

    // 2、下载响应
    // res.download(__dirname + '/singers.json')

    // 3、json响应
    // res.json({
    //     name: 'ming',
    //     age: 18
    // })

    // 4、响应文件内容
    res.sendFile(__dirname + '/02-form.html')

});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动……");
});
