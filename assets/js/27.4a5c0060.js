(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{303:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("不管是正向代理还是反向代理，实现的都是上面的功能。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("根据状态码过滤")]),t._v(" "),t._m(20),s("p",[t._v("根据URL名称过滤，精准匹配URL，不匹配的URL全部重定向到主页。")]),t._v(" "),t._m(21),s("p",[t._v("根据请求类型过滤。")]),t._v(" "),t._m(22),t._m(23),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),s("p",[t._v("Upstream指定后端服务器地址列表")]),t._v(" "),t._m(56),s("p",[t._v("在server中拦截响应请求，并将请求转发到Upstream中配置的服务器列表。")]),t._v(" "),t._m(57),t._m(58),t._v(" "),t._m(59),t._m(60),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c85a64d6fb9a04a0e2e038c",target:"_blank",rel:"noopener noreferrer"}},[t._v("转载自掘金：原文链接"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"nginx常用配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用配置","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx常用配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("nginx是一个高性能的HTTP和反向代理服务器，也是一个通用的TCP/UDP代理服务器，最初由俄罗斯人Igor Sysoev编写。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"主要应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要应用")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("解决跨域")]),t._v(" "),s("li",[t._v("请求过滤")]),t._v(" "),s("li",[t._v("配置gzip")]),t._v(" "),s("li",[t._v("负载均衡")]),t._v(" "),s("li",[t._v("静态资源服务器")]),t._v(" "),s("li",[t._v("...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"正向代理与反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正向代理与反向代理","aria-hidden":"true"}},[this._v("#")]),this._v(" 正向代理与反向代理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代理")]),this._v("是在服务器和客户端之间假设的一层服务器，"),e("strong",[this._v("代理")]),this._v("将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/11/1696a119014d6079?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx配置文件主要结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件主要结构","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx配置文件主要结构")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("events "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        location path\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        location path\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    server\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("main")]),this._v(":nginx的全局配置，对全局生效。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("events")]),this._v(":配置影响nginx服务器或与用户的网络连接。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("http")]),this._v("：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("server")]),this._v("：配置虚拟主机的相关参数，一个http中可以有多个server。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("location")]),this._v("：配置请求的路由，以及各种页面的处理情况。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("upstream")]),this._v("：配置后端服务器具体地址，负载均衡配置不可或缺的部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"内置变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 内置变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面是"),e("code",[this._v("nginx")]),this._v("一些配置中常用的内置全局变量，你可以在配置的任何位置使用它们。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("变量名")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("$host")])]),t._v(" "),s("td",[t._v("请求信息中的"),s("code",[t._v("Host")]),t._v("，如果请求中没有"),s("code",[t._v("Host")]),t._v("行，则等于设置的服务器名")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$request_method")])]),t._v(" "),s("td",[t._v("客户端请求类型，如"),s("code",[t._v("GET")]),t._v("、"),s("code",[t._v("POST")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$remote_addr")])]),t._v(" "),s("td",[t._v("客户端的"),s("code",[t._v("IP")]),t._v("地址")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$args")])]),t._v(" "),s("td",[t._v("请求中的参数")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$content_length")])]),t._v(" "),s("td",[t._v("请求头中的"),s("code",[t._v("Content-length")]),t._v("字段")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$http_user_agent")])]),t._v(" "),s("td",[t._v("客户端agent信息")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$http_cookie")])]),t._v(" "),s("td",[t._v("客户端cookie信息")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$remote_port")])]),t._v(" "),s("td",[t._v("客户端的端口")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$server_protocol")])]),t._v(" "),s("td",[t._v("请求使用的协议，如"),s("code",[t._v("HTTP/1.0")]),t._v("、·HTTP/1.1`")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$server_addr")])]),t._v(" "),s("td",[t._v("服务器地址")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$server_name")])]),t._v(" "),s("td",[t._v("服务器名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$server_port")])]),t._v(" "),s("td",[t._v("服务器的端口号")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"请求过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求过滤","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求过滤")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("error_page 500 501 502 503 504 506 /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将跟路径改编为存放html的路径。")]),t._v("\n    root /root/static/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rewrite  ^.*$ /index.html  redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("~ ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GET"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("POST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("HEAD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 403"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx解决跨域的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx解决跨域的原理","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx解决跨域的原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("前端server的域名为："),e("code",[this._v("fe.server.com")])]),this._v(" "),e("li",[this._v("后端服务的域名为："),e("code",[this._v("dev.server.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在我在"),e("code",[this._v("fe.server.com")]),this._v("对"),e("code",[this._v("dev.server.com")]),this._v("发起请求一定会出现跨域。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在我们只需要启动一个nginx服务器，将"),e("code",[this._v("server_name")]),this._v("设置为"),e("code",[this._v("fe.server.com")]),this._v(",然后设置相应的location以拦截前端需要跨域的请求，最后将请求代理回"),e("code",[this._v("dev.server.com")]),this._v("。如下面的配置：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  fe.server.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                proxy_pass dev.server.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("这样可以完美绕过浏览器的同源策略："),s("code",[t._v("fe.server.com")]),t._v("访问"),s("code",[t._v("nginx")]),t._v("的"),s("code",[t._v("fe.server.com")]),t._v("属于同源访问，而"),s("code",[t._v("nginx")]),t._v("对服务端转发的请求不会触发浏览器的同源策略。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置gzip")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/11/1696a11900dcb2d4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("GZIP")]),t._v("是规定的三种标准HTTP压缩格式之一。目前绝大多数的网站都在使用"),s("code",[t._v("GZIP")]),t._v("传输 "),s("code",[t._v("HTML")]),t._v("、"),s("code",[t._v("CSS")]),t._v("、"),s("code",[t._v("JavaScript")]),t._v(" 等资源文件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于文本文件，"),e("code",[this._v("GZip")]),this._v(" 的效果非常明显，开启后传输所需流量大约会降至 "),e("code",[this._v("1/4 ~ 1/3")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("并不是每个浏览器都支持"),e("code",[this._v("gzip")]),this._v("的，如何知道客户端是否支持"),e("code",[this._v("gzip")]),this._v("呢，请求头中的"),e("code",[this._v("Accept-Encoding")]),this._v("来标识对压缩的支持。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/11/1696a11900e89931?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("启用"),s("code",[t._v("gzip")]),t._v("同时需要客户端和服务端的支持，如果客户端支持"),s("code",[t._v("gzip")]),t._v("的解析，那么只要服务端能够返回"),s("code",[t._v("gzip")]),t._v("的文件就可以启用"),s("code",[t._v("gzip")]),t._v("了,我们可以通过"),s("code",[t._v("nginx")]),t._v("的配置来让服务端支持"),s("code",[t._v("gzip")]),t._v("。下面的"),s("code",[t._v("respone")]),t._v("中"),s("code",[t._v("content-encoding:gzip")]),t._v("，指服务端开启了"),s("code",[t._v("gzip")]),t._v("的压缩方式。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/11/1696a1190112985c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("                    on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gzip_http_version       1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gzip_comp_level         5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gzip_min_length         1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("开启或者关闭"),s("code",[t._v("gzip")]),t._v("模块")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("off")])]),t._v(" "),s("li",[t._v("可配置为"),s("code",[t._v("on / off")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gzip-http-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-http-version","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip_http_version")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("启用 "),s("code",[t._v("GZip")]),t._v(" 所需的"),s("code",[t._v("HTTP")]),t._v(" 最低版本")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("HTTP/1.1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这里为什么默认版本不是"),e("code",[this._v("1.0")]),this._v("呢？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("HTTP")]),this._v(" 运行在"),e("code",[this._v("TCP")]),this._v(" 连接之上，自然也有着跟"),e("code",[this._v("TCP")]),this._v(" 一样的三次握手、慢启动等特性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("启用持久连接情况下，服务器发出响应后让"),e("code",[this._v("TCP")]),this._v("连接继续打开着。同一对客户/服务器之间的后续请求和响应可以通过这个连接发送。\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/11/1696a1193cfc0c4b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}}),this._v("\n为了尽可能的提高 "),e("code",[this._v("HTTP")]),this._v(" 性能，使用持久连接就显得尤为重要了。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("HTTP/1.1")]),t._v("默认支持"),s("code",[t._v("TCP")]),t._v("持久连接，"),s("code",[t._v("HTTP/1.0")]),t._v(" 也可以通过显式指定 "),s("code",[t._v("Connection: keep-alive")]),t._v(" 来启用持久连接。对于"),s("code",[t._v("TCP")]),t._v("持久连接上的"),s("code",[t._v("HTTP")]),t._v(" 报文，客户端需要一种机制来准确判断结束位置，而在 "),s("code",[t._v("HTTP/1.0")]),t._v("中，这种机制只有"),s("code",[t._v("Content-Length")]),t._v("。而在"),s("code",[t._v("HTTP/1.1")]),t._v("中新增的 "),s("code",[t._v("Transfer-Encoding: chunked")]),t._v(" 所对应的分块传输机制可以完美解决这类问题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("nginx")]),this._v("同样有着配置"),e("code",[this._v("chunked的")]),this._v("属性"),e("code",[this._v("chunked_transfer_encoding")]),this._v("，这个属性是默认开启的。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("Nginx")]),t._v("在启用了"),s("code",[t._v("GZip")]),t._v("的情况下，不会等文件 "),s("code",[t._v("GZip")]),t._v(" 完成再返回响应，而是边压缩边响应，这样可以显著提高 "),s("code",[t._v("TTFB")]),t._v("("),s("code",[t._v("Time To First Byte")]),t._v("，首字节时间，WEB 性能优化重要指标)。这样唯一的问题是，"),s("code",[t._v("Nginx")]),t._v(" 开始返回响应时，它无法知道将要传输的文件最终有多大，也就是无法给出"),s("code",[t._v("Content-Length")]),t._v("这个响应头部。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("所以，在"),s("code",[t._v("HTTP1.0")]),t._v("中如果利用"),s("code",[t._v("Nginx")]),t._v("启用了"),s("code",[t._v("GZip")]),t._v("，是无法获得"),s("code",[t._v("Content-Length")]),t._v("的，这导致HTTP1.0中开启持久链接和使用"),s("code",[t._v("GZip")]),t._v("只能二选一，所以在这里"),s("code",[t._v("gzip_http_version")]),t._v("默认设置为"),s("code",[t._v("1.1")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gzip-comp-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-comp-level","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip_comp_level")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("压缩级别，级别越高压缩率越大，当然压缩时间也就越长（传输快但比较消耗cpu）。")]),this._v(" "),e("li",[this._v("默认值为 "),e("code",[this._v("1")])]),this._v(" "),e("li",[this._v("压缩级别取值为"),e("code",[this._v("1-9")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gzip-min-length"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-min-length","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip_min_length")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("设置允许压缩的页面最小字节数，"),s("code",[t._v("Content-Length")]),t._v("小于该值的请求将不会被压缩")]),t._v(" "),s("li",[t._v("默认值:"),s("code",[t._v("0")])]),t._v(" "),s("li",[t._v("当设置的值较小时，压缩后的长度可能比原文件大，建议设置"),s("code",[t._v("1000")]),t._v("以上")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gzip-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-types","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip_types")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("要采用gzip压缩的文件类型("),s("code",[t._v("MIME")]),t._v("类型)")]),t._v(" "),s("li",[t._v("默认值:"),s("code",[t._v("text/html")]),t._v("(默认不压缩"),s("code",[t._v("js")]),t._v("/"),s("code",[t._v("css")]),t._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"nginx如何实现负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx如何实现负载均衡","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx如何实现负载均衡")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#轮询策略")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器#压力太大，出现延迟，会影响所有分配在这台服务器下的用户。")]),t._v("\nupstream balanceServer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    least_conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最小连接数策略(将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求)")]),t._v("\n    fair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最快响应时间策略(依赖于NGINX Plus，优先分配给响应时间最短的服务器)")]),t._v("\n    ip_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#客户端ip绑定(同一个ip的请求永远只分配一台服务器，解决了动态网页存在的session共享问题)")]),t._v("\n    server 10.1.22.33:12345"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server 10.1.22.34:12345"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server 10.1.22.35:12345"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        server_name  fe.server.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        listen 80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location /api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://balanceServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"静态资源服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态资源服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态资源服务器")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location ~* \\."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("png"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root    /root/static/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    autoindex on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    access_log  off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    expires     10h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置过期时间为10小时          ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("匹配以"),e("code",[this._v("png|gif|jpg|jpeg")]),this._v("为结尾的请求，并将请求转发到本地路径，"),e("code",[this._v("root")]),this._v("中指定的路径即nginx本地路径。同时也可以进行一些缓存的设置。")])}],!1,null,null,null);e.default=a.exports}}]);