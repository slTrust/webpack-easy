modules = {
  // index.js
  1: function (require, exports) {
    let action = require('./action.js').action
    let name = require('./name.js').name
    let msg = `${name} is ${action}`
    console.log(msg)
  },
  // action.js
  2: function (require, exports) {
    let action = 'make webpack'
    exports.action = action
  },
  // name.js
  3: function (require, exports) {
    let name = 'my name is xxx'
    exports.name = name
  }
}

// 所有的模块归拢到一处
// 用一个 modules 收集
// 过程就是，我们又一个工具 比如叫做 webpack,把我们的代码变成如下内容，然后把每个modules挨个执行一下

// 执行模块返回结果
function exec(id) {
  let fn = modules[id]
  let exports = {}
  fn(require, exports)

  // 浏览器不是 node环境，所以没有 require，我们需要创造一个require
  function require(path) {
    // 根据模块的路径，返回执行的结果
  }
}

// 模块0 是我们的入口文件
exec(0)




