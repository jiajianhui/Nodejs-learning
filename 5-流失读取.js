// 1、引入fs模块
const fs = require("fs");

// 2、创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

// 3、绑定data事件（用来获取读取到的数据)；chunk为回调函数，从文件中读取出来一块数据，就会执行一次
rs.on('data', chunk => {
  console.log(chunk.length); //65536 => 64kb  每次读取64kb
})

// 4、读取完毕后，会触发end事件；可选事件
rs.on('end', () => {
    console.log('读取完成');
    
})