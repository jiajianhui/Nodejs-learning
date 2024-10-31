// 1、导入express、path等模块
var createError = require('http-errors');  //用于创建 HTTP 错误对象，便于处理 404 和其他错误。
var express = require('express');  //Express 框架核心模块，提供构建 Web 应用的基本工具
var path = require('path');  //处理文件路径的内置模块
var cookieParser = require('cookie-parser');  //用于解析请求中的 cookies
var logger = require('morgan');  //用于记录 HTTP 请求日志的中间件（这里使用的是 morgan 模块）。

// 1-1、导入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 2、创建应用对象
var app = express();  //创建了一个 Express 应用实例，app 将作为整个应用的主对象，管理中间件、路由和配置。

// view engine setup
// 3、设置视图引擎
app.set('views', path.join(__dirname, 'views'));  //views 设置了模板文件的路径
app.set('view engine', 'ejs');  //view engine 设置了模板引擎类型，这里使用 ejs 模板引擎

// 4、使用中间件
app.use(logger('dev')); //使用 morgan 日志记录中间件记录请求日志
app.use(express.json()); //解析请求体中的 JSON 编码数据
app.use(express.urlencoded({ extended: false })); //解析请求体中的 URL 编码数据
app.use(cookieParser()); //解析请求中的 cookies
app.use(express.static(path.join(__dirname, 'public'))); //设置静态资源中间件

// 5、使用路由，将两个路由模块挂载到对应路径上——可以设置路由前缀，简化操作
app.use('/', indexRouter); //挂载到 / 路径，负责处理根路径的请求
app.use('/users', usersRouter); //挂载到 /users 路径，负责处理用户相关的请求

// catch 404 and forward to error handler
// 6、404处理
app.use(function(req, res, next) {
  next(createError(404)); //如果请求未匹配任何路由，调用 createError(404) 创建一个 404 错误，传递到下一步的错误处理中间件
});

// error handler
// 7、错误处理
// 这个错误处理中间件根据当前环境显示不同的错误信息。它在开发环境下提供详细错误信息，其他环境则隐藏细节。错误页面通过 error 模板渲染。
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 8、导出应用
// 将 app 对象导出，以便在入口文件（例如 bin/www）中引用并启动服务器。
module.exports = app;
