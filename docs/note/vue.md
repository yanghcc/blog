# vue知识点整理

## record

### interview

1. 怎么将一个异步方法promise化，以及实现promise.all()方法
2. vue单页多页的区别，vue路由实现原理
3. vue数据驱动视图原理？更新视图的过程是否是同步的操作？
4. nodejs相关的应用（答：开发命令行工具、web服务，ssr，数据库操作等）
5. vue项目开发环境如何配置？wepack-dev-server 热更新功能实现原理
6. express、koa、redis等技术相关应用
7. \[1,2,3\].map(parseInt) 执行结果
8. 面试反馈，问面试官一些问题

<!-- ## 记录 -->

### 如何实现vue组件重载

#### 一、利用v-if控制

```javascript
<template>
  <router-view v-if="isRouterAlive"/>
</template>
<script>
export default {
 data () {
   return {
     isRouterAlive: true
   }
 },
 methods: {
   reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }
 }
}
</script>

// 在子组件中注入父组件中的变量在data（）之前注入
inject:['reload']
// 然后其它任何想刷新自己的路由页面，都可以这样：
this.reload()
```

#### 二、路由替换

```javascript
// replace another route (with different component or a dead route) at first
// 先进入一个空路由
vm.$router.replace({
  path: '/_empty',
})
//then replace your route (with same component)
vm.$router.replace({
  path: '/student/report',
  query: {
    'paperId': paperId
  }
})
```
