import fetch from '@system.fetch'

Function.prototype.bindPage = function (vmInst) {
  const fn = this
  return function () {
    if (!vmInst) {
      throw new Error(`使用错误：请传递VM对象`)
    }
    if (vmInst.$valid) {
      return fn.apply(vmInst, arguments)
    } else {
      console.info(`页面销毁时，不执行回调函数`)
    }
  }
}

/**
 * 网络请求 
 * @param options 
 * @return {Promise} 
 */
async function request (options, vmInst) {
  const p1 = new Promise((resolve, reject) => {
    options.success = function (data, code) {
      resolve({
        data,
        code
      })
    }.bindPage(vmInst)
    options.fail = function (data, code) {
      resolve({
        data,
        code
      })
    }.bindPage(vmInst)
    let defaultConfig = {
      header: { 
        'Content-Type': 'application/json'
      }
    }
    fetch.fetch(Object.assign({}, defaultConfig, options))
  })
  return p1
}

export default request