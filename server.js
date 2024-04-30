const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const api = require('./rotas/index')
const PORT = process.env.PORT

console.log(process.env.MONGO_PASS)

app.use(bodyParser.json())
app.use('/api', api)

app.get('/', (req,res)=>{
    res.json({
        success: true
    })
})
 
app.listen(PORT)


//6B3MOPm0G1Xulpx1
//wellingtonzanelatto
//mongodb+srv://wellingtonzanelatto:<password>@supervisoriodescarte.ecr8llm.mongodb.net/?retryWrites=true&w=majority&appName=SupervisorioDescarte
