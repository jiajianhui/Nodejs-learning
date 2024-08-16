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
router.post('/form', (req, res) => {

  // 创建form对象  
  const form = formidable({
    multiples: true,
    // 设置上传文件根目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
  });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);
    // console.log(files);
    let url = "/images/" + files.avatar.newFilename  //将来将此数据保存在数据库中
    res.send(url);
  });
})

module.exports = router;
