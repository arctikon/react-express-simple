//---------------------------------------------------------------------
//  use json-server set up express mock server at localhost:5000
//---------------------------------------------------------------------
const path = require('path')
const chalk = require('chalk')
const logger = require('morgan')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const http = require('http')
const app = express()
const server = http.createServer(app)
const db = require('./config/db');

let productsApi = require('./api/products');
let categoriesApi = require('./api/categories');



//-------------------------------------------------------------------
//  end
//-------------------------------------------------------------------
app.set('port', (process.env.PORT || 5000))
app.set('env', 'development')

// static file
app.use(express.static(path.join(__dirname, '../build')))

// express middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cookieParser())

app.use('/api', productsApi);
app.use('/api', categoriesApi);

console.log('im on server right now');

// development error handler will print stacktrace
//if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
//}

// jump to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})


// start server
server.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log(chalk.cyan(`The server is running at http://localhost:${app.get('port')}`))
  if (process.send) {
    process.send('online')
  }
})
