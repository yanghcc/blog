# 阅读整理

## subtile

### 函数柯里化(curry)

概念
> curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

你可以一次性地调用 curry 函数，也可以每次只传一个参数分多次调用。

```js
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
```

### 高阶函数

> 函数可以作为参数传递
> 函数可以作为返回值输出