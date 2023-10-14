const express = require('express')
const { connect } = require('mongoose')
const connectDB = require('./db/connect_db')
const morgan = require("morgan")
const app = express()
const port = 3000
const web =require('./routes/web')

app.use(express.urlencoded({extended:true}))

connectDB()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(morgan("dev"));
app.use('/',web)
  

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
