---
# meta:
#   - http-equiv: refresh
#     content: 0;url=/note/ # 自动重定向页面
home: true
heroImage: ./document.png
heroText: doc
tagline: 关注分享，关注导航，关注icetower.cn
actionText: note →
actionLink: /note/
features:
- title: 专注
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: 导航
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 选择
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Icetower
# sidebar: auto
# sidebarDepth: 2
---
<!-- 注释 -->
<iframe src="https://ghbtns.com/github-btn.html?user=yanghcc&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>

<template>
  <div class="test-demo">
    {{ msg }}
    <Hello></Hello>
    <el-button class="btn" @click="handleClick">button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  },
  methods: {
    handleClick() {
      console.log('handleClick')
    }
  }
}
</script>
<style lang="stylus">
  .test-demo {
    text-align center
  }
  .btn {
    margin-top 20px
    margin-bottom 50px
  }
</style>