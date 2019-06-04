# npm 常用模块

- browserify
- grunt/grunt-cli
- gulp/gulp-util
- bower
- yo/yeomen-generator

#### 编译css/js

- coffee-script
- less
- node-sass
- uglify-js
- clean-css
- uglifycss
- stylus

#### 框架

- express
- connect
- koa

#### 测试

- karma
- mocha
- chai

#### 工具函数

- underscore/underscore.string
- lodash
- moment（dayjs）
- node-uuid
- mime : 获取mime信息
- semver ： semver版本号处理
- minimatch : 正则匹配
- xtend : extend方法
- cheerio : 解析html文档。解析的结果可以用jQuery的写法来筛选想要的dom元素
- shelljs : node中提供unix shell命令支持
- pkginfo : 读取模块的package.json
- validator ： string validate
- iconv-lite ： 编码
- clone : clone 对象或数组
- nib : stylus mixin 及工具
- inherits : prototype扩展，相比原生浏览器支持良好
- cjson ： json loader
- escodegen ： js生成器
- esprima ： js解析器
- md5: 生成md5
- crypto: 加密算法
- matchdep: 获取模块依赖，package.json 
- http: 网络
- superagent: 网络请求模块
- request: 网络请求模块
- socket.io
- ws : websocket,类似socket.io
- statsd : 获取udp metrics
- body-parser : 内容格式的中间件，结合express使用
- morgan: http request的logger中间件
- oauth
- http-proxy : 代理服务器
- urlrouter : connect路由中间件
- tiny-lr: live reload server及中间件
- connect-url-rewrite ： 正则rewrite url中间件

#### 异步

- async
- bluebird
- when
- es6-promise

#### 流/stream

- event-stream : 对stream的操作
- through/through2 : 对stream的构造和操作
- concat-stream : 对stream进行concat操作
- tar : 压缩
- block-stream : 指定block大小的流

#### 文件操作

- mkdirp
- glob: 正则匹配文件
- fs-extra : 复制、建目录、删除等fs扩展操作
- wrench ： 递归的文件操作
- rimraf : rm -rf操作
- watchr ： 文件改动watching
- gaze ： 同watchr
- graceful-fs ： fs封装
- ncp ： 异步cp文件
- temp ： 临时文件生成及操作

#### 模板引擎

- handlebars
- jade
- ejs
- mustache

#### 数据库

- redis
- mongoose
- mysql
- pg ： postgreSql

#### 命令行辅助

- commander : 菜单，命令及help
- optimist : 命令行解析，同commander
- minimist : 更简单的参数处理
- yargs ： 同minimist
- prompt ： 命令行交互prompt
- inquirer : 命令行交互api，prompt、questions等等
- colors ： console颜色
- chalk ： 同colors

#### debug

- winston : log扩展封装
- log4js ： 同winston
- cli-table
- forever : 一直执行脚本
- nodemon: 一直执行脚本
- node-dev

#### node管理

- pm2 : node应用进程管理及状态监测
- n : node版本管理作者
- nvm

#### 工具

- nrm: 用于切换npm源

#### other

- node-canvas
- node-xml2js
- html2jade
- nodemailer
- marked : markdown编译为html
- js-yaml : 解析yaml
- jsdom : 对dom操作
- node-fetch: A light-weight module that brings window.fetch to Node.js
- qs: A querystring parser with nesting support