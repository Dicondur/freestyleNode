//Person class
function person(){
    this.name="",
    this.language,
    this.location 

    this.getName = function getName(){
        this.name;
        console.log(this.name);
    }
}

var Person1 = new person();
Person1.name="Diensh";

person.prototype.item =100;


module.exports.ppl = Person1; //reference to public function or method

