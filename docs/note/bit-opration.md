# 位运算符

> - 所有 `JavaScript` 数字存储为根为10的64（8比特）浮点数。`JavaScrip`t不是类型语言。与许多其他编程语言不同，`JavaScript`不定义不同类型的数字，比如整数、短、长、浮点等等。
>
> - 整数精度（不使用小数点或指数计数法）最多为15位。小数精度的最大位数是17，但是浮点运算并不总是100% 准确。
>
> - 位运算直接对二进制位进行计算，位运算直接处理每一个比特位，是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能够使用。
>
> - 位运算只对整数起作用，如果一个运算数不是整数，会自动转为整数后再运行。
>
> - 在`JavaScript`内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。

## JS中常用的7个位运算符

### 1. 按位与(AND) `&`

`&`以特定的方式组合操作二进制数中对应的位，如果对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。

```javascript
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 1的二进制表示为: 00000000 00000000 00000000 00000001
console.log(1 & 3)     // 1
```

### 2. 按位或(OR) `|`

`|` 运算符跟 `&` 的区别在于如果对应的位中任一个操作数为1 那么结果就是1。

```javascript
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 3的二进制表示为: 00000000 00000000 00000000 00000011
console.log(1 | 3)     // 3
```

### 3. 按位异或(XOR) `^`

`^` 如果对应两个操作位有且仅有一个1时结果为1，其他都是0。

```javascript
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 2的二进制表示为: 00000000 00000000 00000000 00000010
console.log(1 ^ 3)     // 2
```

### 4. 按位非(NOT) `~`

`~` 运算符是对位求反，1变0, 0变1，也就是求二进制的反码。

```javascript
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 1反码二进制表示: 11111111 11111111 11111111 11111110
// 由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。
// -----------------------------
// 1的反码减1：     11111111 11111111 11111111 11111101
// 反码取反：       00000000 00000000 00000000 00000010
// 表示为10进制加负号：-2
console.log(~ 1)     // -2
```

**简单记忆：一个数与自身的取反值相加等于-1**。

### 5. 左移（Left shift）`<<`

`<<`运算符使指定值的二进制数所有位都左移指定次数，其移动规则：**丢弃高位，低位补0**即按二进制形式把所有的数字向左移动对应的位数，高位移出(舍弃)，低位的空位补零。

```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// -----------------------------
// 2的二进制表示为: 00000000 00000000 00000000 00000010
console.log(1 << 1)     // 2
```

### 6. 有符号右移`>>`

`>>`该操作符会将指定操作数的二进制位向右移动指定的位数。**向右被移出的位被丢弃，拷贝最左侧的位以填充左侧**。由于新的最左侧的位总是和以前相同，符号位没有被改变。所以被称作“符号传播”。

```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// -----------------------------
// 0的二进制表示为: 00000000 00000000 00000000 00000000
console.log(1 >> 1)     // 0
```

### 7. 无符号右移`>>>`

`>>>`该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，左侧用0填充。因为符号位变成了 0，所以结果总是非负的。（译注：即便右移 0 个比特，结果也是非负的。）

对于非负数，有符号右移和无符号右移总是返回相同的结果。例如， `9 >>> 2` 得到 `2 和 9 >> 2` 相同。

## 位运算符在js中的妙用

1. 使用&运算符判断一个数的奇偶

```javascript
// 偶数 & 1 = 0
// 奇数 & 1 = 1
console.log(2 & 1)    // 0
console.log(3 & 1)    // 1
```

1. 使用`~, >>, <<, >>>, |`来取整

```javascript
console.log(~~ 6.83)    // 6
console.log(6.83 >> 0)  // 6
console.log(6.83 << 0)  // 6
console.log(6.83 | 0)   // 6
// >>>不可对负数取整
console.log(6.83 >>> 0)   // 6
```

1. 使用`^`来完成值交换

```javascript
var a = 5
var b = 8
a ^= b
b ^= a
a ^= b
console.log(a)   // 8
console.log(b)   // 5
```

1. 使用`&, >>, |`来完成rgb值和16进制颜色值之间的转换

```javascript
/**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 */
  function hexToRGB(hex) {
    var hexx = hex.replace('#', '0x')
    var r = hexx >> 16
    var g = hexx >> 8 & 0xff
    var b = hexx & 0xff
    return `rgb(${r}, ${g}, ${b})`
}

/**
 * RGB颜色转16进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String}     16进制颜色字符串
 */
function RGBToHex(rgb) {
    var rgbArr = rgb.split(/[^\d]+/)
    var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
    return '#'+ color.toString(16)
}
// -------------------------------------------------
hexToRGB('#ffffff')               // 'rgb(255,255,255)'
RGBToHex('rgb(255,255,255)')      // '#ffffff'
```

[转载自掘金：原文链接](https://juejin.im/post/5a98ea2f6fb9a028bb186f34)