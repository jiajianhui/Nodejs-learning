const ejs = require("ejs");

const fs = require('fs')

let html = fs.readFileSync('./02-xiyou.html').toString()  //buffer无法解析，必须将其转为字符串

const xiyou = ['唐僧', '悟空', '沙僧', '猪八戒']

let result = ejs.render(html, {xiyou});

console.log(result);
