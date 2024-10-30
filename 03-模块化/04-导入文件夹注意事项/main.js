
// 导入文件夹时，首先检测该文件夹下package.json文件中main属性对应的文件，若存在则导入，如果找不到，就会报错
// 若main属性不存在，或者package.json不存在，则会尝试导入文件夹下的index.js和index.json，如果还是找不到，就会报错
// 导入node.js内置模块时，直接require模块的名字即可（const fs = require('fs'），无需加 ./和../ 

const app = require('./module')

console.log(app);
