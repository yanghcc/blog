# css 笔记

## 简介

### flex布局设置单个子元素靠右

```html
<div id="app">
  <div class="">1</div>
    <div class="">1</div>
  <div class="item">1</div>
</div>
<style>
  #app {display: flex;}
  .item {
      flex: 1;
      text-align: right;
      // margin-left: auto;
  }
</style>
```
