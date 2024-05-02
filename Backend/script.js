const express = require('express');
const app=express();

app.use(function(req,res,next){
    //IN req ALL THE DETAILS OF THE USER LIKE THEIR IP ADDRESS, LOCATION etc ARE STORED
    //IN res FILE THE DETAILS THAT WE GET FROM ARE SERVER ARE STORED
    console.log("middleware working");
    next();
    //HERE WE HAVE TO write next() BECAUSE THERE HAVE PROBLAME WITH NODE THAT IF THE CONTROL REACHED 
    //THE MIDDLWARE IT WON'T PASSED TO NEXT NEXT ROUTE, HENCE WE HAVE TO PUSH IT SO THAT IT MOVES TO
    //NEXT ROUTE. 
})

app.get('/',function(req,res){
    res.send('hello world');
}) 

app.get('/profile',function(req,res){
    res.send('hello from profile');
})

app.get('/profile/:username',function(req,res){
    // res.send('hello from sourav');
    res.send(`hello from ${req.params.username}`);
})

app.get('/about',function(res,res){
    res.send('hello pfrom about');
})

app.listen(3000);