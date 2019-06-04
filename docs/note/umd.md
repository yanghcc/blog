# umd

## 通用模块定义

```js
var TWEEN = function () {}
// UMD (Universal Module Definition)
(function (root) {

	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], function () {
			return TWEEN;
		});

	} else if (typeof module !== 'undefined' && typeof exports === 'object') {

		// Node.js
		module.exports = TWEEN;

	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;

	}

})(this);
```
