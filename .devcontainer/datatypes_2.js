// Primitive

//7 types : String, Number, Boolean, null, Undefined, Symbol,
//BigInt

const score = 100
const score_value = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;
const id = Symbol('123');


// Reference(Non Primitive):
// Arrays, Objects, Functions

const heroes = ["shaktiman","Nagraj","Doga"]
const myObj  = {
    name : "Xyz",
    age:999
}
const functionality = function name(params) {
    console.log("Hello World")
}


///Memory Allottment
// Heap and Stack Memory
// Heap (Non Primitive Data Types) - Changes are mafe in the original memory slot
//Stack Memory (Primitive Data Types) - Changes are made in the reference memory slot 