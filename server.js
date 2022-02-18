const express = require('express')
const helmet = require('helmet')
const path = require('path')
const proxy = require('express-http-proxy')
const ProxyOptions = require('./server/proxyOptions')
require('dotenv').config()
const app = express()
app.use(
  helmet({
    frameguard: {
      action: 'deny',
    },
  })
)
/**
 * routes to static files
 **/
// Change maxage to 1hour when client onboarding starts
app.use(express.static(path.join(__dirname, './build'), { maxage: '1m' }))
/**
 * API serve here
 **/
app.use('/r/api/**', proxy(process.env.REACT_APP_API_URL, ProxyOptions))
app.use('/logout', proxy(process.env.REACT_APP_API_URL))
/**
 * React serve here
 **/
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, './build'), 'index.html'))
})
app.listen(process.env.PORT || 3000, () => {
  console.debug(`App listening on port ${process.env.PORT || 3000}`)
})
