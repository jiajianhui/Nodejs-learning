//导入http模块
const http = require("http");

// 1、导入fs模块
const fs = require('fs')

//创建服务对象
const server = http.createServer((req, res) => {

    // 2、读取文件内容
    let html = fs.readFileSync(__dirname + '/09-table.html')

    res.end(html)  //end方法的参数，可以是buffer和字符串

})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动');
    
})