// 1、引入fs模块
const fs = require("fs");

// 2、使用stat方法
fs.stat('./资料/笑看风云.mp4', (err, data) => {
    if (err) {
        console.log('查看失败');
        return
    }
    // 查看资源信息
    console.log(data);
    
    // 是否为文件
    console.log(data.isFile());
    
    // 是否为文件夹
    console.log(data.isDirectory());
    
})



// birthtime——创建时间；atime——最后访问时间；mtime——最后修改时间；ctime——最后修改文件状态的时间