
// 需求——根据不同的请求地址返回不同的响应体


// 1、导入http模块
const http = require("http");

// 2、创建服务对象
const server = http.createServer((req, res) => {

    // 获取请求方法
    let method = req.method

    // 获取请求url路径
    let pathName = new URL(req.url, 'http://127.0.0.1').pathname

    // 判断
    if (method === 'GET' && pathName === '/login') {
        res.end('login')
    } else if(method === "GET" && pathName === "/reg") {
        res.end('register')
    } else {
        res.end('not found')
    }
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动');
    
})