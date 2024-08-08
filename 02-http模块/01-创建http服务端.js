// 1、导入http模块
const http = require('http')

// 2、创建服务对象
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8')  //解决响应内容中文乱码问题
    res.end('hello http，你好 http')  //设置响应体
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动');
    
})



// 注意事项
