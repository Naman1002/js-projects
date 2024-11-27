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

console.log(jsUser.name) // Method 1
console.log(jsUser["name"]) // Method 2
console.log(jsUser["department"]) // no other way to access a string type key
console.log(jsUser[mySym]) // only method to print the symbol data types

jsUser.email = "doga@microsoft.com"
//Object.freeze(jsUser)
jsUser.email = "doga@meta.com"
console.log(jsUser["email"])

jsUser.greeting = function(){
    console.log("Welcome JS User")
}
jsUser.greetingTwo = function(){
    console.log(`Welcome JS User ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
