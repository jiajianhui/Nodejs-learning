var express = require('express');
var router = express.Router();

const formidable = require("formidable");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 表单路由
router.get('/form', (req, res) => {
  res.render('form');
})

//上传路由
router.post('/form', (req, res, next) => {

  // 创建form对象  
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录（public）
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀名
    keepExtensions: true
  });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);  //存储text、radio、checkbox、select
    console.log(files);   //存储file（图片）

    // 文件上传的逻辑
    // 1、图片从客户端发送到服务端
    // 2、服务端把图片保存在静态资源文件夹下（public）
    // 3、然后将该图片的访问url存到数据库中
    
    // 服务器保存上传图片的访问url
    let url = "/images/" + files.avatar.newFilename  //将来将此数据保存在数据库中
    res.send(url);
  });
})

module.exports = router;
