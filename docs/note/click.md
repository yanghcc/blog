# 移动端click延迟及zepto的穿透现象

穿透现象与click的延迟解决方法是分不开的，若要了解穿透现象，需要先了解click延迟的解决原理。

### 移动端click事件300ms的延迟现象的原因：

在最早iphone的safar浏览器中，为了实现触屏中双击放大效果，当用户点击屏幕时后会判断在300ms内是否有第二次点击，如果有，就理解成双击，若没有就是单击, 就会触发click事件. 当你点击移动设备的屏幕时, 可以分解成多个事件，顺序依次为：touchstart — touchmove — touchend — click, 这些事件是按顺序依次触发的.

### 解决延迟的思路：

touchstart touchend是没有延迟的，可以在touchend时触发用户想要在click时触发的事件.

### zepto 解决click延迟的原理：

自定义tap事件，当用户点击元素时，touchend事件先发生, 当touchend事件冒泡到document时触发目标元素绑定的tap事件

简单模拟zepto tap的实现方式（这里忽略touchstart与touchend的点击位置的判断）：

```
// document元素上绑定touchend事件, 在touchend的事件处理函数中自定义tap事件, 当点击的目标元素的touchend事件冒泡到document上时, 触发绑定在目标元素上的tap事件
document.addEventListener('touchend', function(e) {
  // 自定义tap事件
  var evt = document.createEvent('Event');
  evt.init(’tap’, true, true);

  // 触发绑定在目标元素上的tap事件
  e.target.dispatch(evt);
}, false);
// -----------------------------------------------------------------
// 用户绑定tap事件
document.getElementById(‘elementid’).addEventListener('tap’, function(e) {
  // click事件逻辑
}, false);
```

### zepto的tap穿透现象：

遮罩层中有一个标签绑定了tap事件，触发时遮罩层消失，该标签正下方有一个绑定了click的按钮，此时点击上层的标签，同时也会触发下层元素的click事件，出现穿透的现象。

### 为什么会出现穿透：

结合前面tap事件的原理来分析：

当触发tap事件，上层遮罩层关闭后，此时事件只进行到touchend，而click是在大概300ms后才触发，当click触发时，上面的遮罩层已消失，就相当于点击到了下层的元素。

### 下层什么样的元素才会形成穿透：

根据原理来说，因为穿透是发生在click发生时，也就是下层绑定了click事件或click时会触发的事件（focus focusout）的元素，或点击时有默认形为的标签元素，如a input(会出系统键盘的type类型或绑定了focus事件)等。

# 如何解决穿透：

方法一：直接将上层元素的tap事件换成click事件（会出现300ms的延迟触发事件）

方法二：在click事件触发前阻止它，如在touchend的事件中使用e.preventDefault()来阻止后续的click事件

# zepto为何不使用e.preventDefault()来解决穿透问题？

因为zepto的tap事件统一是在document的touchend时触发的，若在这里使用e.preventDefault()，那页面上所有元素在touchend后触发的事件都不会被执行了。