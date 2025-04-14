function numMultFive(num){
    return num = num*5;
}

numMultFive.power = 2

console.log(numMultFive(5));
console.log(numMultFive.power);
console.log(numMultFive.prototype);
// .prototype return {} which includes the current context of the methods as well as the methods of an objects

function createUsername(username,score) {
    this.username = username;
    this.score = score;
}

//adding a self created functionality inside createUserName() function
createUsername.prototype.increment = function(){
    this.score = score++;  // jisne bhi call kiya hai uske pass jao
}
createUsername.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}
// new keyword is used so that the instance of a function can use the injected methods
let chai = new createUsername("Chai",25);  
chai.printMe(); // if new was not given then an errorwould have been thrown saying that 
// cannot read properties of undefined .printMe 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: 
The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/