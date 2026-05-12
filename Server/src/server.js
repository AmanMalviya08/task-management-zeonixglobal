const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDb = require('./config/db.js')
const cors = require('cors')
dotenv.config({ path: path.join(__dirname, '.env') })
const taskRoutes = require('./routes/task.routes')

connectDb()

const app = express()
const PORT = process.env.PORT || 7000


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))


// error handler
app.use((error, res, req, next)=>{
    console.error(error.stack)
    res.status(500).json({
        message: 'Internal Server Error'
    })
}) 

app.use('/api/tasks', taskRoutes)



// if route not exist
app.use((req, res)=>{
    res.status(404).json({
        message: 'Route not exist in system'
    })
})

// get api
app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

module.exports = app