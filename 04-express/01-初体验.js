// 1、导入express
const express = require('express')

// 2、创建对象
const app = express()

// 3、创建路由
app.get('/', (req, res) => {
    res.end('hello express!')
})

// 4、监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动……');
})