# vuex learn record

> vuex 是全局的数据中心，数据更新，相关的视图能同步更新。

1. vuex实例(store)与vuex实例(vm)对比

```javascript
   - state => data
   - getter =>
   - mutation (commit 触发) => methods
   - actions (dispatch触发) => 支持异步数据更新
     // Action 类似于 mutation，不同在于：
     // Action 提交的是 mutation，而不是直接变更状态。
     // Action 可以包含任意异步操作。
     // Action 通过 store.dispatch 方法触发
```
