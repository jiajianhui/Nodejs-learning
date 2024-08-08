// 需求——在一个文件中持续写入多行内容

// 1、导入fs模块
const fs = require('fs')

// 2、创建写入流对象
const ws = fs.createWriteStream("./侠客行.txt");

// 3、开始写入
ws.write("赵客缦胡缨，吴钩霜雪明。\r\n");
ws.write("银鞍照白马，飒沓如流星。\r\n");


// 4、关闭通道——可省略
ws.close()


// *****流式写入适合大文件写入或者频繁写入，writeFile适合写入频率较低的场景*****