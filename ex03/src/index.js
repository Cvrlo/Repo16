class Person {
     
    static display(){
    console.log("Static method i invoked from Person class");
    
   } 
    static show(){
    this.display();

   }
}

var message = new Person();
message.show();
module.exports = Person;
