# FE基础知识整理整理

> html

1. 新增了哪些新的特性？
   - 结构化语义标签：`<section>，<footer>，<header>，<aside>，<article>，<nav>`
   - 非结构化语义标签：`<audio>，<video>，<canvas>，<datalist>，<details>，<figure>，<figcaption>,<mark>，<progress>，<source>，<time>`
   - 包括多媒体标签：`<audio>，<video>，<source>`
   - 包括画布：`<canvas>`
   - 包括表单元素：`<datalist>`
   - input新增输入类型（type属性）：`email、url、number、tel、search、color、range、date、month、week、time、datatime`
   - input新增属性：`placeholder、required、autofocus、autocomplete、list、form、novalidate、pattern、disabled、readonly`
2. HTML5语法规范？
   - `<!DOCTYPE html>` // 文档声明
   - 空标签可以关闭也可以不关闭；双标签可以省略结束标签 （统一标签结束）
   - 标签支持大写和小写（统一小写）
   - script、style、link标签的type属性可以省略
   - html、head、body可以完全省略（建议保留）
   - ...
3. `<meta>`标签有哪些用法？
4. `<base>`标签用法？
5. 怎么实现点击一个按钮，带上URL和参数打开浏览器一个新标签页？
6. DOM&BOM？DOM级别与DOM事件？
7. HTTP和TCP相关协议
8. 网页渲染流程

> css

1. ie兼容问题
2. 页面布局
3. css3动画
4. 预处理器（sass、less、stylus）
5. 后处理器（postCss）

> js

1. 基本数据类型
2. 数组去重?自己实现或者使用es6的方法。
3. jquery
4. `$.extend()` ->js有哪些数据类型？对象合并->对象直接复赋值、浅拷贝和深拷贝区别？
5. this指向
6. 闭包和变量提升的问题
7. 原型和原型链
8. 构造函数
9. 单线程和异步
10. 作用域
11. ES6
12. 编码风格（eslint、standardjs）
13. typescript
14. 单元测试
15. AMD和CMD区别
16. es6的promise(async&await)、Symbol(新数据类型)、Iterator（迭代器）
   **原生具备 Iterator 接口的数据结构如下。**
    - Array
    - Map
    - Set
    - String
    - TypedArray
    - 函数的 arguments 对象
    - NodeList 对象
17. ...

> 框架

1. vuejs
2. reactjs
3. juqery
4. 微信小程序
5. 微信小游戏

> 工具

1. webpack
2. gulp
3. 编辑器

> fullstack

1. nodejs
2. mongoDB
3. redis
4. ...

> 其他

1. 游戏引擎（layaair、egret、cocos2d）

## 面试题

> 关于多项赋值顺序，对象引用

```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};
console.log(a.x);
console.log(b.x);
```

>关于对象循环引用

```js
var a = {n: 1}
a.b = a;
// 判断方法：
// 1. JSON.stringify 如果遇到参数里有循环引用的，就会抛出一个循环调用的错误 Uncaught TypeError: Converting circular structure to JSON
// 2. 使用递归判断
function checkCircularReference(obj) {
    var stack = []
    (function fn(obj) {
     var len
     for (len = stack.length; len--;) {
         if (stack[len] === obj) throw TypeError()
     }
     stack.push(obj)
     for (let k in obj) {
         const value = obj[k]
         if (typeof value === 'object') fn(value)
     }
    })(obj)
    // fn(obj)
}
```