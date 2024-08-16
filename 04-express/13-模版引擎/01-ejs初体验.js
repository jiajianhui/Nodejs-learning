// 1、安装ejs

// 2、导入ejs
const ejs = require('ejs')

const fs = require("fs");


let hello = 'hello'
let eee = "eee";


let str = fs.readFileSync('./01-html.html').toString()  //buffer无法解析，必须将其转为字符串

//使用ejs渲染
let result = ejs.render(str, { hello, eee });

console.log(result);
