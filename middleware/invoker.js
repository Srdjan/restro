import resource from './resource'

function func(ctx) {
  let handler = resource[ctx.method]
  if (!typeof handler) {
    ctx.result = { Error: 'method resolver error' }
    ctx.statusCode = 500
    return ctx
  }
  ctx = handler(ctx)
  return ctx
}

export default func

// ---------------------------------------------------------------------------------
// @tests
// ---------------------------------------------------------------------------------
const log = console.log
let expect = require('expect.js')
log('testing: invoker.js')

// let ctx = invoke({ method: 'bad method name'})
// expect(ctx.statusCode).to.be(500)

// ctx = invoke({method: 'get'})
// expect(typeof ctx.handler).to.be('function')
