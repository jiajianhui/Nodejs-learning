// 需求——复制资料文件夹中的视频


const fs = require("fs");
const process = require('process')


// 常规读取——readFile
// 1、读取文件内容
// let data = fs.readFileSync("./资料/笑看风云.mp4");
// // 2、写入内容
// fs.writeFileSync("./资料/笑看风云-1.mp4", data);


// 流式读取——readFile；使用更少内存，大概使用53MB
// 1、创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')
// 2、创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云2.mp4')
// 3、绑定data事件
rs.on('data', chunk => {
    ws.write(chunk)
})
// 4、查看使用内存情况
rs.on('end', () => {
    console.log(process.memoryUsage());
})