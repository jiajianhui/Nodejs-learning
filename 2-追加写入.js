// 需求——在座右铭.txt基础上，新增内容，温故而知新，可以为师矣

// 1、导入fs模块
const fs = require("fs");

// 2、调用appendFile（异步方法）
// fs.appendFile("座右铭.txt", "\r\n温故而知新，可以为师矣", err => {
//     if (err) {
//         console.log('追加失败');
//         return
//     }
//     console.log('追加成功');
// });

// console.log(111);

// 3、同步方法
// fs.appendFileSync("座右铭.txt", "\r\n温故而知新，可以为师矣——同步追加");

// console.log(222);


// ----------------------------------------------------------------
// 使用writeFile方法，添加配置项，也可以追加内容（否则会清空内容再去写入）
fs.writeFile("./座右铭.txt", "\r\n温故而知新，可以为师矣——同步追加", {flag: 'a'}, err => {
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
});
