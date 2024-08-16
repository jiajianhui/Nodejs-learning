const ejs = require("ejs");

const fs = require("fs");

let html = fs.readFileSync("./03-条件渲染.html").toString(); //buffer无法解析，必须将其转为字符串


let isLogin = false

let result = ejs.render(html, {isLogin});

console.log(result);



    