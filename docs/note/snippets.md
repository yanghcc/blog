# 代码片段

## 数组操作

### 数组扁平化

```js
const arr=[[1,2,3],[3,4],[5]]; // 二维数组转一维数组
console.log([].concat.apply([],arr));

// Array.prototype.flat()
//  flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

// 等同于 ES6 [...arr1, ...arr2]
// 多维数组扁平化方法封装
// 数组扁平化 等同es6[...arr]展开操作
function steamroller (arr) {
    var temp = [],_this=this;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 如果是数组，调用(递归)steamroller 将其扁平化
            // 然后再 push 到 temp 中
            temp.push.apply(temp, _this.steamroller(arr[i]));
        } else {
            // 不是数组直接 push 到 temp 中
            temp.push(arr[i]);
        }
    }
    return temp;
}
```
