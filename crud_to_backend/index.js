const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const todoRouter = require('./routes/todo.js')
const mongoConnect = require('./db/db.js')
const app = express()
dotenv.config()

// middlewares

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server post
const port = process.env.PORT || 5000



// Routes
app.use('/', todoRouter)
// Listen server

app.listen(port, () =>{
    mongoConnect()
    console.log(`'Server is running!' ${port}`);
})