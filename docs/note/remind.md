# 备忘录

## 2018-04-18

```javascript
// on('DOMMouseScroll'）firfox浏览器滚轮事件
$(elm).on('mousesheel',function(){
	return !1 // 阻止元素滚动冒泡到body
})

```

```javascript
// 导航栏滚动定位
navScroll (idx) {
  const menu = document.getElementById('menu')
  const step = menu.children[0].offsetWidth // offsetWidth 获取元素宽度
  if (idx > 2) {
    menu.scrollLeft = step * (idx - 2) // scrollLeft 使元素滚动到指定位置
  }
}
```

```javascript
// window.requestAnimationFrame(callback)
// 参数
// callback
// 一个指定函数的参数，该函数在下次重新绘制动画时调用。这个回调函数只有一个传参，DOMHighResTimeStamp，指示requestAnimationFrame() 开始触发回调函数的当前时间（performance.now() 返回的时间）。
// 返回值
// 一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给window.cancelAnimationFrame() 以取消回调函数。
function scrollToTop (scrollDuration) {
  const cosParameter = window.scrollY / 2
  let scrollCount = 0
  let oldTimestamp = performance.now()
  function step (newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
    if (scrollCount >= Math.PI) window.scrollTo(0, 0)
    if (window.scrollY === 0) return
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))
    oldTimestamp = newTimestamp
    window.requestAnimationFrame(step)
  }
  window.requestAnimationFrame(step)
}
scrollToTop(1000)// js实现平滑滚动到顶部动画
```

#### 2018-04-19

```javascript
scrollToLeft (elm, scrollLeft, distance, scrollDuration) {
  let times = 0
  let step = (newTimestamp) => {
    time += 100
    elm.scrollLeft = this.linear(time, scrollLeft, distance - scrollLeft, scrollDuration)
    if (times < scrollDuration) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}
/*
 * 线性动画算法
 * t: 当前时间, b: 初始值, c: 变化量, d: 持续时间
 * 返回值 为当前坐标
*/
linear (t, b, c, d) {
  return c * t / d + b
}
// requestAnimationFrame的兼容处理
if (!window.requestAnimationFrame) {
    requestAnimationFrame = function (fn) {
        return setTimeout(fn, 17);
    };
}
if (!window.cancelAnimationFrame) {
    cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}
```

```javascript
// iOS safari 如何阻止“橡皮筋效果”？
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false}); //passive 参数不能省略，用来兼容ios和android
```