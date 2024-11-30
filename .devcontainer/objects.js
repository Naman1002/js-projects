//singleton created when an object is created through a constructor

// object literals

const mySym = Symbol("key1")
const jsUser ={
    name:"Naman",
    [mySym]:"myKey",             // The only way to declare symbols
    age:18,
    "department":"none",
    location:"Jaipur",
    email:"jogi@gmail.com",
    isLoggedIn:false,
    lastLoggedInDay:["Monday","Saturday"]
}

// console.log(jsUser.name) // Method 1
// console.log(jsUser["name"]) // Method 2
// console.log(jsUser["department"]) // no other way to access a string type key
// console.log(jsUser[mySym]) // only method to print the symbol data types

jsUser.email = "doga@microsoft.com"
//Object.freeze(jsUser)
jsUser.email = "doga@meta.com"
//console.log(jsUser["email"])

jsUser.greeting = function(){
//    console.log("Welcome JS User")
}
jsUser.greetingTwo = function(){
//    console.log(`Welcome JS User ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


//const tinderUser = new Object() // Creates an empty Object
const tinderUser = {} // Again creates a new empty Object

tinderUser.Id = "123abc";
tinderUser.name = "Sammy";
tinderUser.IsLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "reguar@gmail.com",
    fullname:{
        userfulname:{
            firstname:"Naman",
            lastname:"Singh"
        }   
    } 
}
// console.log(regularUser.fullname) // Normal syntax
// console.log(regularUser.fullname?.userfulname.firstname) // Optional Chain syntax

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
//obj3 = {obj1,obj2}
//console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Spread Operator for objects 
obj3 = {...obj1,...obj2}


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // to get the output from array that has objects as elements

// console.log(Object.keys(tinderUser)) // outputs all the keys in the object and the output is in the form of an array
// console.log(Object.values(tinderUser)) // outputs all the values in the object and the output is in the form of an array
// console.log(Object.entries(tinderUser)) // Returns an array of key/values of the enumerable own properties of an object
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns an array of key/values of the enumerable own properties of an object

const course = {
    courseName:"JSBasics",
    coursePrice:"Free",
    courseInstructor:"ChatGPT"
}

// Object Destructuring 
const {courseInstructor:instructor} = course

console.log(instructor);