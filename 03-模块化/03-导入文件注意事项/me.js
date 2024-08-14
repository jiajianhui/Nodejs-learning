// 声明函数
function reading() {
    console.log('读书中……');
}

function running() {
  console.log("跑步中……");
}

function hi() {
  console.log("你好");
}

// module.exports——可以暴露任何数据
module.exports = {
    reading,  //完整写法——reading: reading
    running
}

// 不能使用exports = value的形式暴露数据
// exports.hi = hi

// ***exports === module.exports = {}***