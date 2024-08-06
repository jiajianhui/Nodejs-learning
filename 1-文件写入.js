// 需求——新建文件（座右铭.txt），写入内容，三人行必有我师焉


// 1、导入fs模块
const fs = require('fs')

// 2、写入文件——异步
fs.writeFile("./座右铭.txt", "三人行必有我师焉", err => {
    // 写入失败会丢出err对象；若成功的话，会丢出null
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
});

console.log('hello');

// 2-1、同步写入；该方法没有回调函数
fs.writeFileSync('./同步.txt', '同步方法')
console.log("同步--");