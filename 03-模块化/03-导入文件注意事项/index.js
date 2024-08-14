// 导入模块
// const me = require('./me.js')

// 1、导入js和json文件，可省略后缀；建议使用相对路径
const me = require('./me')

// 导入json
const json = require('./json')

// 2、导入其他类型文件时，会以js文件进行处理
const abc = require('./abc')



// 调用数据
console.log(me);
me.running()
// me.hi()

// 打印json
console.log(json);
// 打印其他类型文件
console.log(abc);

