function firstName(firstName){
    return firstName.toUpperCase();
}

function lastName(lastName){
    return lastName.toLowerCase();
}

console.log(firstName("miran"));
console.log(lastName("SELMA"));
exports.module = {
    firstName,
    lastName
}