// 1、引入fs模块
const fs = require("fs");

// 2、调用rename方法
fs.rename('./座右铭.txt', './论语.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log("操作成功");
})

// 使用rename方法完成文件移动
fs.rename("./data.txt", "./资料/data.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
});


// ******重命名与移动文件的本质是一样的，都是更改文件的路径