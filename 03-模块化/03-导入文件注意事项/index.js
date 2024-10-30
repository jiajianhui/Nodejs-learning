// 导入模块；

// 0、在fs模块中建议使用绝对路径，相对路径会受工作目录影响；但是require不会受工作目录影响，且相对路径写起来更方便
// 导入自己创建的模块时，./和../ 是不能省略的
const me = require('./me.js')

// 1、导入js和json文件，可省略后缀；建议使用相对路径
// const me = require('./me')

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

