// index.js
function (require, exports, module) {
  let action = require('./action.js').action
  let name = require('./name.js').name
  let msg = `${name} is ${action}`
  console.log(msg)
}

// action.js
function (require, exports, module) {
  let action = 'make webpack'
  exports.action = action
}

// name.js
function (require, exports, module) {
  let name = 'my name is xxx'
  exports.name = name
}
