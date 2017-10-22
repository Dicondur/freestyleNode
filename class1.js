var obj = require('./objfactory');
obj.name = "Class1";//set defaults
obj.age =10;
obj.getname =  function(){
    console.log(this.name);
}

// console.log(obj.name);
console.log(obj.age);

obj.getname();