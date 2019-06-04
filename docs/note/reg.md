# Regular

### 常用正则表达式

```javascript
// 1. 匹配url
/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
// 2. 千分位格式化
String(12345678.321).replace(/\d{1,3}(?=(\d{3})+(\.|$))/g,'$&,')

//【正则表达式】前瞻，后顾，负前瞻，负后顾
//举个例子：

var str = "博客园 顾客 博客 客园"

//我们想匹配字符串里"博客园"的"客"字而不要其他的"客"字，这时就需要用到前瞻后顾。

//正则表达式如下：

var reg = (?<=博)客(?=园)

//反过来，我们不想要"博客园"的"客"字，但是想要其他"客"字。这时就要用到负前瞻，负后顾

//正则表达式如下：

var reg2 = (?<!博)客(?!园)

/*总结一下：
前瞻： exp1(?=exp2)     查找exp2前面的exp1
后顾:  (?<=exp2)exp1   查找exp2后面的exp1
负前瞻:  exp1(?=exp2)     查找后面不是exp2的exp1
负后顾:  (?<=exp2)exp1   查找前面不是exp2的exp1
可以发现，负前瞻、负后顾就是把前瞻、后顾中的"="改成了"!"
注意：后顾功能在大多数语言中有长度限制，只能使用定长的表达式，像\w+和\d 这样的表达式长度可变，不能用在后顾中
 */

// 一个复杂一点的例子：

`str = "data: '|12 34 56 78 90|', data: '|12|3456|7890|', data: '|12|', data: '1234567890', data: '|1234|'  "`

//我们要匹配data后面有||的部分，要求里面没有空格没有|并且长度大于2

var reg3 = (?<=data: ')\|[^ \|]{2,}?\|(?=') // 可以匹配到 |1234|
```

### 匹配 img 标签的 src

```js
var reg = /<img.*?src=[\"\']?(.*?)[\"\']?.*?>/i
```

### 匹配空行

```js
var reg = /^[\s]*\n>/i
```

### 类型检测方法封装

```js
/*
 * @param {string} str
 * @param {string} type >>> 'email', 'phone', 'tel', 'number', 'english, 'text', 'chinese', 'lower', 'upper'
 * @features 字符串类型检查
 */
function checkType (str, type) {
  switch (type) {
    case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    case 'tel':
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'number':
        return /^[0-9]$/.test(str);
    case 'english':
        return /^[a-zA-Z]+$/.test(str);
    case 'text':
        return /^\w+$/.test(str);
    case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower':
        return /^[a-z]+$/.test(str);
    case 'upper':
        return /^[A-Z]+$/.test(str);
    default:
        return true;
    }
  }
```

**正则查找：**src="(?:\S+?(\w\.gif|\w\.jpg))"

+?表示懒惰模式，?:表示非捕捉分组

**正则替换：**src="/images/$1"

$1,表示捕捉的到的内容，反向引用