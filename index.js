const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const routes = require('./routers')
const morgan = require('morgan')
const path = require('path')
const db = require('./config/databases')

app.use(morgan('combined'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.engine('handlebars',engine({
  extname: '.hbs'
}))
app.set('view engine','handlebars')
app.set('views',path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'public')))

db.connect()
routes(app)


app.listen(port, () => {
  console.log(`Started on port ${port}`)
})