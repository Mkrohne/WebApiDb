require ('dotenv').config()
const port = process.env.API_PORT || 5000
const mongodbInit = require ('./mongodb_server')
const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const app = express()

//middlewares

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

//routes/controllers

const productsController = require ('./controllers/productsController')
app.use('/api/products', productsController)

//start Api's
mongodbInit()
app.listen(port, () => console.log(`Web Api is running @ http://localhost:${port}`))