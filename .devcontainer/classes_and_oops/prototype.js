let myName = "Naman";

console.log(myName.length)


// adding a method in key-value pair
let heroPower = {
    thor:"Hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`The spider power is ${this.spiderman}`)
    }
}

// adding a custom method in the object so that all the objects will have that method
Object.prototype.getPower = function(){
    console.log("Superpower present");
}

heroPower.getPower()

// when we declare it in the custom object such as an array or function then it will not be a global method
const hero_arr = ["superman","spiderman"]
Array.prototype.arrayDesc = function(){
    console.log("Array of Superheroes")
}

//Inheritance

const User = {
    name:"Chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo:true
}
const teacherAssistance = {
    isAvailable:true
}

//inherits the properties of TeacherAssistance
const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:teacherAssistance
}

Teacher.__proto__ = User // Teacher inherits properties from it's user

// mordern syntax

Object.setPrototypeOf(teacherAssistance,Teacher) // teacherAssistance inherits properties from teacher

let secondUser = "Naman    ";
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True Length is ${this.trim().length}`)
}

secondUser.trueLength();