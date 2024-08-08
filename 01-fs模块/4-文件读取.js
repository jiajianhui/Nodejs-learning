// 1、引入fs模块
const fs = require('fs')

// 2、异步读取
fs.readFile('./侠客行.txt', (err, data) => {
  if (err) {
    console.log("读取失败");
    return;
  }
  console.log(data.toString()); //这里返回的数据是buffer，使用toString将其转为字符串
})

// 3、同步读取
let data = fs.readFileSync("./侠客行.txt");
console.log('同步读取\r\n' + data.toString());
