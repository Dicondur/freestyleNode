function ten(){
    var connect = require('connect');
    var http = require('http');

    var app = connect();
    



    //Middleware layers like a delegate
    //Publish
    function doFirst(request, response,next){
        console.log("Connect started..statemachine1");
        
        next();
    }

    function doSecond(request, response,next){
        console.log("Connect started....stateMachine2");
        next();
    }



    app.use(doFirst);//Subscribe
    app.use(doSecond);


    http.createServer(app).listen(3000);  
    console.log("Started server");



}

// ten();


function eleven(){
    var http = require('http');
    var connect = require('connect');
    var fs = require('fs');

    var app = connect();
    
    
    //Middlewares 
    
    
    function init(request, response, next){
        console.log("Page load started ...");
        next();
    }

    
    function index(request, response, next){
        console.log("Index page request");
        if(request.method =='GET' && request.url =='/'){
            response.writeHead(200,{"Context-Type":"text/html"});
            fs.createReadStream("./index.html").pipe(response);
       }
        next();
    }

    
    function done(request, response, next){
        console.log("Page load .....complete");
        next();
    }



    function about(request, response){
        console.log("About page request");
        // next();
    }
    
    function blog(request, response){
        console.log("Blog page request");
        // next();
    }

    //404 response
    function send404(response){
        response.writeHead(404,{"Context-Type":"text/plain"});
        response.write("Error: Brain freeze ....404 Highway not found!");
        response.end();
    }




    //Subscribe 
    app.use(init);
    app.use(index);
    app.use(done);


    app.use('/about', about);
    app.use('/blog',blog);


    http.createServer(app).listen(3000);
    console.log("Server is running");


}

//eleven();


function twelve(){

    var express = require('express');
    
}

twelve();

