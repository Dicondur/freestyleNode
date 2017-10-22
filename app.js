var main = function(){
    console.log("Welcome");



//Get a randon number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  };



//Message que to handle multiple requests
function placeRequest(requestNumber){

    console.log("Message request #",requestNumber);
    getDB(function(){
        console.log("Delivered meassage request number:", requestNumber);
        // console.log(requestNumber, "Took", time);
    })
};

//simulate a 5 sec operation like connecting to database or API
function getDB(callback){
    var timeToProcess= getRandomIntInclusive(1000,5000);
    setTimeout(callback, timeToProcess);//run in defined time
    // console.log("takes",timeToProcess/1000 ,"Seconds to process");
    // return (timeToProcess/1000);
};



//Simulate web requests
var rand = getRandomIntInclusive(1,10);
console.log("Simulating",rand , "requests");

for (var i=1;i<=rand;i++){

    placeRequest(i);
    
}

};

// var init = main();

function two(){

    var person = {
        name:"dinesh",
        age:""
    };
    
    
    
    
    // var newperson = person;
    // newperson.name="NewName";
    
    // console.log(person.name);
    
    
    console.log(19 == "19");
        
    
};

// two();





function three(){

var people={
    firstName:"Dinesh",
    lastName:"Condur",
    
    
    printFirstname: function(){console.log(this.firstName + this.lastName)}
}

people.printFirstname();



function doSomethingAwesome(){
console.log("What?\n",this);
}

doSomethingAwesome();

};


// three();

function four(){

function user(){
    this.name="";
    this.life=100;

    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life +=1;
        this.life -=1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
};


var Player1 = new user();
var Player2 = new user();

Player1.name ="Dinesh";
Player2.name ="Deeksha";

Player1.giveLife(Player2);
console.log( Player1.name,"has:",Player1.life);
console.log( Player2.name,"has:",Player2.life);

//Add method to prototype
user.prototype.hit = function hit(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name, "hit", targetPlayer.name);
}



Player2.hit(Player1);
console.log( Player1.name,"has:",Player1.life);
console.log( Player2.name,"has:",Player2.life);


user.prototype.getScores = function getScores(){
    console.log( this.name,"has:",this.life);
}
console.log("\n")
Player1.getScores()
Player2.getScores()



user.prototype.magic =60;
console.log(Player1.magic);
console.log(Player2.magic);

};

// four();


function five(){
//export import

// var people = require('./person');
// people.ppl.getName();
// console.log(people.ppl.item);

// people.ppl.getName(); //import as a class


//import like a config file
var config = require('./conf');
console.log(config.githubURL);
config.getAuthor();

}

// five();

//Calls a object factory from class1
function six(){
var cls1 = require('./class1');
cls1.name="This name from app.js"
console.log(cls1.name);
}

// six();

function seven(){
    var fs = require('fs');
    var path =require('path');


    fs.writeFileSync("poem.txt","Get creative! Row row row your bow gently down the stream...")
    console.log(fs.readFileSync("poem.txt").toString());

    var webHome = "projects/html//www/index.html";
    console.log(path.normalize(webHome));
    console.log(path.dirname(webHome));
    console.log(path.basename(webHome));
    console.log(path.extname(webHome));
}



// seven();


function eight(){
    var i=-15;
    
    setInterval(function(){
      {
            console.log(" T + ",i++,"and counting..");
            if (i==0){
                console.log("Blast Off");
                return;
            }
        }
        
    }, 10000)
    }


// eight();


function nine(){

// console.log(__dirname);
// console.log(__filename);

// Example statuc serve
var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8888);
console.log("Server runing on port 8888");


//Request handler
function onRequest(request, response){
    console.log("A request was made"+request.url);
    // response.writeHead(200,{"Context-Type":"text/plain"});
    // response.write("here is the responce");
    // response.end();
    if(request.method =='GET' && request.url =='/'){
         response.writeHead(200,{"Context-Type":"text/html"});
         fs.createReadStream("./index.html").pipe(response);
    }else{
        send404(response);
    }
    
    
    
}


//404 response
function send404(response){
    response.writeHead(404,{"Context-Type":"text/plain"});
    response.write("Error: Brain freeze ....404 Highway not found!");
    response.end();
}



}
//  nine();


function ten(){
    var connect = require('connect');
}


