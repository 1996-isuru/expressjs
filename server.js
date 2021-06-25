const express = require('express');
const bodyParser = require('body-parser');

const app =express();
app.use(bodyParser.urlencoded({extended:false})) 

const addminRoutrs = require('./routes/admin');

app.use(addminRoutrs)

const userRoutes = require('./routes/user');
app.use(userRoutes);

// app.use('/details',(req,res,next) =>{
//     console.log("details middleware"); 
//     res.send("details middleware"); 
// })

// app.use('/product',(req,res,next) =>{
//     console.log("product middleware"); 
//     res.send("product middleware");
// })




// app.use('/',(req,res,next) =>{
//     console.log("Default midlware in server.js");  
//     res.send('Default midlware in server.js');
// })

app.use((req,res,next) => {
    res.status(404).send('<h2>page not found</h2>')
})

app.listen(8000, () => {
    console.log("server started")
})