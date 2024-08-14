// 导入express
const express = require('express')

// 创建对象
const app = express()

// 创建路由
app.get('/', (req, res) => {
    res.end('hello express!')
})

// get请求
app.get('/home', (req, res) => {
    res.end('home')
})

// post请求
app.post("/login", (req, res) => {
  res.end("login");
});

// 不管是post还是get，路径只要是/test，就匹配
app.all('/test', (req, res) => {
    res.end('test')
})

// 前面的都匹配不上的话，就匹配它
app.all('*', (req, res) => {
    res.end('404 NOT FOUND')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动……');
})