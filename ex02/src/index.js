class Book{
    constructor(title){
    this._title = title;
}
   get title(){
       return this._title;
   }

   set title(newName){
       this._title = newName;
   }



}
const littlePrinc = new Book("The Little Princ");
console.log(littlePrinc.title);
littlePrinc.title = "Le Petit Prince";
console.log(littlePrinc.title);

module.exports = Book;