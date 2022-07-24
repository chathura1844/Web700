const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Welcome to Homepage.')
})

app.get('/about',(req,res) => {
    res.send('Welcome to About Page.')
})

app.listen(3000)