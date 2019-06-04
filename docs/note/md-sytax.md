# Markdown常用语法

## 标题

# 一级标题

## 二级标题  

###### 六级标题

```bash
## 标题
# 一级标题
## 二级标题  
###### 六级标题
```

## 列表

### 无序列表*或-

* 1
* 2
* 3  

另一种

- 1
- 2
- 3

### 有序列表

1. JavaScript
2. jquery
3. lodash
4. angular
5. vue
6. react

```bash
* 1
* 2
* 3  
另一种
- 1
- 2
- 3
### 有序列表
1. JavaScript
2. jquery
3. lodash
4. angular
5. vue
6. react
```

## 引用

> 房子不是一切，你在幸福就在。

## 图片与链接

[baidu](www.baidu.com)
![天气快报](http://tianqi.eastday.com/jscss/v25/mtianqi/img/east-logo.png)

```bash
[baidu](www.baidu.com)
![天气快报](http://tianqi.eastday.com/jscss/v25/mtianqi/img/east-logo.png)
```

## 粗体和斜体 **粗体** *斜体*

```bash
**粗体**  
*斜体*
```

## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```bash
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

### 代码框 三个`包围代码

```javascript
$.ajax({
        async: false,
        url: "http://position.dftoutiao.com/position/get",
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 5000, 
        success: function (data) {}
})
```

## 分割线 三个*

您好！hello,Markdown!  
***

::: warning

特别注意

换行需要使用两个空格再加一个`换行键`

---------

:::