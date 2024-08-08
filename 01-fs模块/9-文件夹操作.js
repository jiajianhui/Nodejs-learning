// 1、引入fs模块
const fs = require("fs");


// 2、创建文件夹  mkdir
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建文件夹失败');
//         return
//     }
//     console.log('创建文件夹成功');
    
// })

// 2-1、递归创建；使用配置项完成
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//     if (err) {
//         console.log('创建文件夹失败');
//         return
//     }
//     console.log('创建文件夹成功');
    
// })

// 2-2、读取文件夹
// fs.readdir('./资料', (err, data) => {
//     if (err) {
//         console.log('读取文件夹失败');
//         return
//     }
//     console.log(data);
    
// })

// 2-3、删除文件夹；recursive——进行递归删除
fs.rm('./a', {recursive: true}, err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('删除成功');
    
})