# nginx常用配置

## 简介

>nginx是一个高性能的HTTP和反向代理服务器，也是一个通用的TCP/UDP代理服务器，最初由俄罗斯人Igor Sysoev编写。

### 主要应用

- 解决跨域
- 请求过滤
- 配置gzip
- 负载均衡
- 静态资源服务器
- ...

### 正向代理与反向代理

**代理**是在服务器和客户端之间假设的一层服务器，**代理**将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。

不管是正向代理还是反向代理，实现的都是上面的功能。

![image](https://user-gold-cdn.xitu.io/2019/3/11/1696a119014d6079?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### nginx配置文件主要结构

```bash
events {
  ...
}

http
{
    server
    {
        location path
        {
            ...
        }
        location path
        {
            ...
        }
     }
    server
    {
        ...
    }

}
```

`main`:nginx的全局配置，对全局生效。

`events`:配置影响nginx服务器或与用户的网络连接。

`http`：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。

`server`：配置虚拟主机的相关参数，一个http中可以有多个server。

`location`：配置请求的路由，以及各种页面的处理情况。

`upstream`：配置后端服务器具体地址，负载均衡配置不可或缺的部分。

### 内置变量

下面是`nginx`一些配置中常用的内置全局变量，你可以在配置的任何位置使用它们。

| 变量名             | 功能                                                         |
| ------------------ | ------------------------------------------------------------ |
| `$host`            | 请求信息中的`Host`，如果请求中没有`Host`行，则等于设置的服务器名 |
| `$request_method`  | 客户端请求类型，如`GET`、`POST`                              |
| `$remote_addr`     | 客户端的`IP`地址                                             |
| `$args`            | 请求中的参数                                                 |
| `$content_length`  | 请求头中的`Content-length`字段                               |
| `$http_user_agent` | 客户端agent信息                                              |
| `$http_cookie`     | 客户端cookie信息                                             |
| `$remote_port`     | 客户端的端口                                                 |
| `$server_protocol` | 请求使用的协议，如`HTTP/1.0`、·HTTP/1.1`                     |
| `$server_addr`     | 服务器地址                                                   |
| `$server_name`     | 服务器名称                                                   |
| `$server_port`     | 服务器的端口号                                               |

### 请求过滤

根据状态码过滤

```bash
error_page 500 501 502 503 504 506 /50x.html;
location = /50x.html {
    #将跟路径改编为存放html的路径。
    root /root/static/html;
}
```

根据URL名称过滤，精准匹配URL，不匹配的URL全部重定向到主页。

```bash
location / {
    rewrite  ^.*$ /index.html  redirect;
}
```

根据请求类型过滤。

```bash
if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
    return 403;
}
```

### nginx解决跨域的原理

例如：

- 前端server的域名为：`fe.server.com`
- 后端服务的域名为：`dev.server.com`

现在我在`fe.server.com`对`dev.server.com`发起请求一定会出现跨域。

现在我们只需要启动一个nginx服务器，将`server_name`设置为`fe.server.com`,然后设置相应的location以拦截前端需要跨域的请求，最后将请求代理回`dev.server.com`。如下面的配置：

```bash
server {
        listen       80;
        server_name  fe.server.com;
        location / {
                proxy_pass dev.server.com;
        }
}
```

这样可以完美绕过浏览器的同源策略：`fe.server.com`访问`nginx`的`fe.server.com`属于同源访问，而`nginx`对服务端转发的请求不会触发浏览器的同源策略。

### 配置gzip

![image](https://user-gold-cdn.xitu.io/2019/3/11/1696a11900dcb2d4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

`GZIP`是规定的三种标准HTTP压缩格式之一。目前绝大多数的网站都在使用`GZIP`传输 `HTML`、`CSS`、`JavaScript` 等资源文件。

对于文本文件，`GZip` 的效果非常明显，开启后传输所需流量大约会降至 `1/4 ~ 1/3`。

并不是每个浏览器都支持`gzip`的，如何知道客户端是否支持`gzip`呢，请求头中的`Accept-Encoding`来标识对压缩的支持。

![image](https://user-gold-cdn.xitu.io/2019/3/11/1696a11900e89931?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

启用`gzip`同时需要客户端和服务端的支持，如果客户端支持`gzip`的解析，那么只要服务端能够返回`gzip`的文件就可以启用`gzip`了,我们可以通过`nginx`的配置来让服务端支持`gzip`。下面的`respone`中`content-encoding:gzip`，指服务端开启了`gzip`的压缩方式。

![image](https://user-gold-cdn.xitu.io/2019/3/11/1696a1190112985c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

```bash
    gzip                    on;
    gzip_http_version       1.1;
    gzip_comp_level         5;
    gzip_min_length         1000;
    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml;
```

### gzip

- 开启或者关闭`gzip`模块
- 默认值为`off`
- 可配置为`on / off`

#### gzip_http_version

- 启用 `GZip` 所需的`HTTP` 最低版本
- 默认值为`HTTP/1.1`

这里为什么默认版本不是`1.0`呢？

`HTTP` 运行在`TCP` 连接之上，自然也有着跟`TCP` 一样的三次握手、慢启动等特性。

启用持久连接情况下，服务器发出响应后让`TCP`连接继续打开着。同一对客户/服务器之间的后续请求和响应可以通过这个连接发送。
![image](https://user-gold-cdn.xitu.io/2019/3/11/1696a1193cfc0c4b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
为了尽可能的提高 `HTTP` 性能，使用持久连接就显得尤为重要了。

`HTTP/1.1`默认支持`TCP`持久连接，`HTTP/1.0` 也可以通过显式指定 `Connection: keep-alive` 来启用持久连接。对于`TCP`持久连接上的`HTTP` 报文，客户端需要一种机制来准确判断结束位置，而在 `HTTP/1.0`中，这种机制只有`Content-Length`。而在`HTTP/1.1`中新增的 `Transfer-Encoding: chunked` 所对应的分块传输机制可以完美解决这类问题。

`nginx`同样有着配置`chunked的`属性`chunked_transfer_encoding`，这个属性是默认开启的。

`Nginx`在启用了`GZip`的情况下，不会等文件 `GZip` 完成再返回响应，而是边压缩边响应，这样可以显著提高 `TTFB`(`Time To First Byte`，首字节时间，WEB 性能优化重要指标)。这样唯一的问题是，`Nginx` 开始返回响应时，它无法知道将要传输的文件最终有多大，也就是无法给出`Content-Length`这个响应头部。

所以，在`HTTP1.0`中如果利用`Nginx`启用了`GZip`，是无法获得`Content-Length`的，这导致HTTP1.0中开启持久链接和使用`GZip`只能二选一，所以在这里`gzip_http_version`默认设置为`1.1`。

#### gzip_comp_level

- 压缩级别，级别越高压缩率越大，当然压缩时间也就越长（传输快但比较消耗cpu）。
- 默认值为 `1`
- 压缩级别取值为`1-9`

#### gzip_min_length

- 设置允许压缩的页面最小字节数，`Content-Length`小于该值的请求将不会被压缩
- 默认值:`0`
- 当设置的值较小时，压缩后的长度可能比原文件大，建议设置`1000`以上

#### gzip_types

- 要采用gzip压缩的文件类型(`MIME`类型)
- 默认值:`text/html`(默认不压缩`js`/`css`)

#### nginx如何实现负载均衡

Upstream指定后端服务器地址列表

```bash
#轮询策略
#默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器#压力太大，出现延迟，会影响所有分配在这台服务器下的用户。
upstream balanceServer {
    least_conn; #最小连接数策略(将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求)
    fair; #最快响应时间策略(依赖于NGINX Plus，优先分配给响应时间最短的服务器)
    ip_hash; #客户端ip绑定(同一个ip的请求永远只分配一台服务器，解决了动态网页存在的session共享问题)
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

在server中拦截响应请求，并将请求转发到Upstream中配置的服务器列表。

```bash
    server {
        server_name  fe.server.com;
        listen 80;
        location /api {
            proxy_pass http://balanceServer;
        }
    }
```

### 静态资源服务器

```bash
location ~* \.(png|gif|jpg|jpeg)$ {
    root    /root/static/;  
    autoindex on;
    access_log  off;
    expires     10h;# 设置过期时间为10小时          
}
```

匹配以`png|gif|jpg|jpeg`为结尾的请求，并将请求转发到本地路径，`root`中指定的路径即nginx本地路径。同时也可以进行一些缓存的设置。

[转载自掘金：原文链接](https://juejin.im/post/5c85a64d6fb9a04a0e2e038c)