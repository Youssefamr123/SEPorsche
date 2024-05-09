//import express as a module

const express = require('express')
//create instance
const app = express()
//register view engine
app.set('view engine', 'ejs')
//routing
app.get('/About', (req,res) =>{

    res.render('About')

})

app.get('/Login', (req,res) =>{

    res.render('Login')

})

app.get('/', (req,res) =>{

    res.render('Home')

})

app.get('/Contact', (req,res) =>{

    res.render('Contact')

})

app.get('/Register', (req,res) =>{

    res.render('Register')

})




const port = 3000;

app.listen(port, ()=>{
    console.log(`listening to port number ${port}`)
})