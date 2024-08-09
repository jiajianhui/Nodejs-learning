
//导入http模块
const http = require("http");

//创建服务对象
const server = http.createServer((req, res) => {

    // 1、设置响应状态码
    res.statusCode = 222

    // 2、设置响应状态描述
    res.statusMessage = 'relax'

    // 3、设置响应头
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.setHeader('myheader', 'hello')
    res.setHeader('test', ['1', '2', '3'])  //一次设置多个响应头

    // 4、设置响应体（使用write方法）——注意，使用write的话，可以有多个；使用end的话，只能有一个
    res.write('relax')
    res.write("love");

    res.end('1')

})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动');
    
})