# summary

## 工作记录

### 浏览器兼容问题

> 处理较多的IE兼容问题（ie8）
> html5shiv：主要解决HTML5提出的新的元素不被IE6-8识别
> Respond.js：是一个快速、轻量的 polyfill，用于兼容 IE6-8以及其它不支持 CSS3 Media Queries 的浏览器
> es5-shim和es5-sham：使不支持es5api的浏览器支持es5 api
> 在ie8中，动态修改script的src属性会报错，解决办法：调用jquery的$.getScript()方法
> 不支持css3动画、圆角、阴影、渐变、滤镜、透明度、（before|after|first-child）之外的伪元素等
> 不支持HTML5新标签，以及新表单元素属性placeholder等新特性
> background属性值不支持连写，indexOf、getComputedStyle方法
> 意外地调用了方法或属性访问：在使用jquery的时候可能会出现这种状况，解决办法有一下两种： 1.凡是input，不管任何类型，不能用text()方法，只能用val()方法；2.不支持jq动态创建script标签，执行脚本

### 广告业务

> 广告是公司最大的营收来源，合作的广告商、渠道众多是广告业务复杂化的根本原因。广告的类型、展现方式、位置、大小、结构、样式多种多样。广告的渲染方式、曝光统计、点击统计、测试、优化，以及特殊地域和渠道限制等，加大的业务逻辑处理的难度。我整合了所有常见的广告需求，并开发了一个jquery插件，用于处理这些复杂的广告逻辑。提高的开发效率，确保每次广告业务需求能够及时上线。

### 微信小游戏

>三个小游戏项目经历，主要使用`typescript`，`layaair`游戏引擎和`egret`游戏引擎（选择原因是这两个游戏引擎性能出色，以及支持直接打包微信小游戏，一次开发多端运行）。难点：在开放数据域获取好友关系链，开发好友排行帮榜。开放数据域是一个独立于主域的环境，数据不能共享，这种特殊原因，导致项目结构复杂化。

### 开发过多个小程序项目

> 使用过腾讯自家`wepy`、美团点评的`mpvue`框架、京东开源的`taro`框架（开发支付宝小程序）、原生小程序开发。使用过`iView weapp,vantUI`等组价库。

### 微信公众号开发

>处理过用户授权、音频，微信支付等比较复杂的场景，熟练使用微信jssdk。

### App混合开发

>开发东方头条客户端用户年度报告活动，难点在于需要兼容app环境和外部浏览器环境，处理各种打点统计。

### css

>前端css预处理器，包括`less,sass,stylus,postcss`等都在项目中使用过。前端开发工程化，大大提高了开发效率。

### html

>熟练掌握canvas、audio、video、history、storage等HTML5新增元素和接口
>使用过很多html模板引擎，如：`pug(jade)、juicer、ejs`等

### 前端主流框架

>主流框架主要`vue,react,anglar`项目中用的较多的是vue。使用过多个基于vue的UI组件库，包括`elementUI，iviewUI，muse-ui，minttUI`等等。了解过`preact`等
>前端主流的js库主要使用了jquery、zepto（阅读过源码）、requirejs，swiperjs。在实际开发中，使用了很多基于这两个库的插件。
>渐进式编程PWA
>vue-ssr服务端渲染（基于react的next.js，基于vue的nuxt.js）

### 其他

大前端趋势下，前端开发职责的范围越来越广。涉及到客户端，后端，数据库，运维知识等。

1. 空余时间学了不少后端知识，包括常用的`linux操作、ftp、shell、nodejs（express、koa）、mongoDB、mysql、nginx`等。
2. 使用过博客网站构建系统hexo，基于react的静态网站构建框架gatsby，基于vue的在线文档构建框架vuepress，git站构建工具开源框架gitea（类似gogs）等。经常浏览技术社区，如：知乎专栏、掘金、stackoverflow；浏览github、码云、开源中国找优秀开源项目。
3. 前端编码规范主要使用`eslint、standardjs`等，代码格式化工具`prettier`等
4. 了解`flutter、react native、electron`、谷歌浏览器插件开发、基于nodejs的终端命令行工具开发等
5. 前端性能优化，图片压缩，代码压缩，字体图标
6. 工具：`git、viscode、sublime、NPM、yarn、postman、google dev tool`等
7. websocket、canvas、ES6、正则匹配等，都能熟练使用。
8. 前端项目打包工具主要使用了`gulp,webpack`，了解过`rollup，parcel`等
9. 负责小组前端技术面试。
