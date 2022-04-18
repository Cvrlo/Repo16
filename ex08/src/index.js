class Person{
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson(){
     const personInfo =  `${this.name}, ${this.email}, ${this.age}`;
     return personInfo;
     }
    
}
const prove = new Person("Miran", "miran.germovsek10@gmail.com", 27);
console.log(prove);
module.exports = Person; 