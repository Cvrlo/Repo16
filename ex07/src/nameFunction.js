function firstName(firstName){
    return firstName.toUpperCase();
}

function lastName(lastName){
    return lastName.toLowerCase();
}

//console.log(firstName(["john"]));
//console.log(lastName(["DOE"]));
module.exports = {
    firstName,
    lastName
}