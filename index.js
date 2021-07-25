// hello world in koa js

const App = require('koa')
const Router = require('koa-router')

// add logger
const logger = require('koa-logger')

// parse body
const bodyParser = require('koa-bodyparser')

const app = new App()
const router = new Router()

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', async (ctx) => {
  ctx.body = 'hello world'
})

// route named test that takes a json param, gets the key city and returns the first element of the city array
router.post('/test', async (ctx) => {
  const city = ctx.request.body.city
  const cityElem = city[0]
  ctx.body = cityElem
})

// run app with app.listen only if called via cli
if (require.main === module) {
  app.listen(3000, () => {
    console.log('app listening on port 3000')
  })
}

// export
module.exports = app.callback()