# 介绍

[官网](http://eslint.org/)

在团队协作中，为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。

## 安装

NOTE： 以全局方式安装

```bash
npm install  eslint eslint-config-google  -g
```

NOTE ：也可在本地上安装

```bash
npm install   eslint eslint-config-google  -–save-dev
```

## 配置

### 配置.eslintrc 文件

可以通过以下三种方式配置 ESLint:

* 新建 .eslintrc 文件（支持 JSON  YAML 和js 格式）；
* 在 package.json 中添加 eslintConfig 配置块
* 直接在代码文件中定义。


在项目中新建如下.eslintrc.yaml 或 .eslintrc.json 

本项目的配置如下（使用yaml格式,主要是因为注释方便）现用规则如下：

.eslintrc.yaml

```yaml
# 主要风格使用google风格
# 规则说明请看http://p.com/w/%E5%90%AF%E5%B0%9A%E7%A0%94%E5%8F%91%E5%9B%A2%E9%98%9F/3.%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3/03_%E5%89%8D%E7%AB%AFweb3.0/02_%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/eslint%E4%BB%A3%E7%A0%81%E7%9A%84%E9%A3%8E%E6%A0%BC%E5%B7%A5%E5%85%B7/
extends: google
# 执行环境
env:
  browser: true
  node: true
  amd: true #requireJS
# 定义全局变量
globals:
  theme: true 
  angular: true
# 修改部分规则
rules:
  max-len:
    - 1 # 规则级别为禁告
    -
      code: 80
      tabWidth: 4
      ignoreUrls: true
      # ignorePattern: '^goog\.(module|require)'
  one-var: [2, "always"]
  #  禁用google风格内的es6内容
  indent: [2, 4, {"SwitchCase": 1}] # 缩进值恢复为4
  arrow-parens: 0 # 箭头函数中，只有一个参数时可以省略圆括号,规定了参数是否需要圆括号包围
  constructor-super: 0 # 保证constructor函数中super()应正确出现，比如在继承的classes中（派生类）必须使用super，否则（非派生类）不要使用super。
  generator-star-spacing: 0  # 规定generator函数中星号前后的空白
  no-new-symbol: 0 # 禁止在Symbol对象前使用new操作符
  no-this-before-super: 0  # 在构造函数中，禁止在super()调用前使用this/super对象
  no-var: 0 # 禁用var，用let和const代替var
  prefer-rest-params: 0 #  在ES2015(ES6)中推荐使用剩余参数(...rest)代替arguments变量
  prefer-spread: 0  # 在ES2015(ES6)中推荐使用扩展符替代apply()方法
  rest-spread-spacing: 0  
  yield-star-spacing: 0 # yield*表达式中的*号前后是否留空格，默认after，比如yield* other()
```

也可以使用json 文件

.eslintrc.json

```json
{
  "extends": "google",
  "env": {
    "browser": true,
    "node": true,
    "amd": true
  },
  "globals": {
    "theme": true,
    "angular": true
  },
  "rules": {
    "max-len": [
      1,
      {
        "code": 80,
        "tabWidth": 4,
        "ignoreUrls": true
      }
    ],
    "one-var": [
      2,
      "always"
    ],
    "indent": [
      2,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "arrow-parens": 0,
    "constructor-super": 0,
    "generator-star-spacing": 0,
    "no-new-symbol": 0,
    "no-this-before-super": 0,
    "no-var": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0,
    "rest-spread-spacing": 0,
    "yield-star-spacing": 0
  }
}
```

### eslintignore文件

和.gitignore一样，.esintignore可以忽略你不想检测的文件，比如在根目录下新建一个.eslintignore文件

```bash
node_modules/
bower_components/
```

这样node_modules/ 和 bower_components/目录的文件就不会被eslint检测

## 编辑器配置

### intellJ IDEA

打开设置界面->左上角搜索eslint->点击 Eanble

![eslint001](image/eslint/eslint001.jpg)

右键打开`Analyze > inspect Code` 可以查看详细的错误

![eslint001](image/eslint/eslint002.gif)

google规则中缩进值为2 ， 可依照下图修改

![eslint001](image/eslint/eslint005.jpg)

intellJ IDEA 的eslint没有fix选项，要以在正在编辑的文件中， 按下 `ctr+shift+c`复制文件的路径；然后在在终端中输入以下命令修复

```bash
eslint --fix [文件路径]
```

### VsCode  

打开 Visual Studio Code ，首先使用快捷键 `Ctrl` + `Shift` + `P` 调出VsCode的控制台，然后输入下面的命令安装`ESLint`插件：

```bash
ext install ESLint
```

同样修改一下缩进值,在用户配置文件中写入

![eslint001](image/eslint/eslint006.jpg)

## 使用 FIX 修复部分错误

`eslint --fix`可以修复一些简单的错误 ，比如没有写分号，换行符是仅win下的 CRLF而非LF等问题。

 ![2016-10-09 13.43.44](image/eslint/eslint004.gif)

### vscode

使用快捷键 `Ctrl` + `Shift` + `P` 输入

```bash
eslint Fix all auto-fixable problems
```

![2016-10-09 13.43.44](image/eslint/eslint003.gif)