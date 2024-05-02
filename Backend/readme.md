node vs express - node is main thing , with the help of express we can write code for backend, we can write code with the help of node as well but it is difficult to use with http hence we ue express, express make the  process easy

WHAT IS EXPRESS - it is apackage hosted on npm with its help we can use routing

WHY EXPRESS JS - http is  difficult to use , expresss makes this easier

ROUTING - routes banake ke process for example /profile, /home ,/about

HOW TO MKAE BACKEND CODE - script.js then install express and write code 

IF WHEN WANT TO DO RE RUN THE SERVER EVREYTIME WHEN EVER WE MAKE ANY CHANGES THEN WE CAN START THE SERVER USING 'npx nodemon ./script.js'

MIDDLEWARE - js code works line by line hence we should put the middle before ('/') route 

refer this code of script.js for more info 

ROUTE PARAMETER 

when we have same replated routed for example--
facebook/profile/sourav
facebook/profile/koustav
facebook/profile/kumkum

then we dont we create same router for diff profile we can do 1 thing insteed or this dynamic routing
 app.get('/profile/:username',function(req,res){
    HERE':/username' refers that it can be anythig after: 
    res.send(`hello from ${req.params.username}`);
    'req.params.username' refers values send in req 
})


