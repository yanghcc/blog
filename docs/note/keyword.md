# javacript 关键字

- `new` 操作符

  ```js
  function _new() {
    let target = {}
    let [constructor, ...args] = [...arguments]
    target.__proto__ = constructor.prototype
    let result = constructor.apply(target, args)
    const resultType = typeof result
    if (result && (resultType === 'object' || resultType === 'function')) {
      return result
    }
    return target
  }
  ```

- `instanceOf`

  ```js
  function instanceof(L, R) { //L是表达式左边，R是表达式右边
    var O = R.prototype
    L = L.__proto__
    while(true) {
        if (L === null)
            return false
        if (L === O)
            return true
        L = L.__proto__
    }
  }
  ```

- `default`
- `this`
- `void`
- `final`
- `volatile`
- ...
