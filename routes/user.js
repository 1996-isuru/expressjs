const express = require('express');

const routes = express.Router();

routes.use('/user-details',(req,res,next) => {
    res.send({
        name:"user 01",
        age: "23"
    })
})

routes.get('/',(req,res,next) => {
    console.log("default middleware");
    res.send('default middleware');
})


module.exports = routes;