// 1、引入fs模块
const fs = require("fs");

// 2、调用unlink方法    unlinkSync
// fs.unlink('./资料/data.txt', err => {
//     if (err) {
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
    
// })

// 调用rm方法  Nodejs 14.4 之后的新方法     rmSync
fs.rm('./资料/data.txt', err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
    
})
