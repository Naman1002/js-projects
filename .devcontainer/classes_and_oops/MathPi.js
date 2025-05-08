const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor) // Math.PI is unchangeable {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const chai = {
    name:"Ginger Chai",
    price:250,
    isAvailable:true,
    orderChai: function(){
        console.log("Chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// -------------------------------------------------------------looping an object

for (const [key,value] of Object.entries(chai)) {  // to iterate over an object you have to use 
// Object.entries as object in itself is not iterable 
    
    // check to only display key value pairs
    if(typeof value != "function"){
        console.log(`${key},${value}`)
    }
}

// if ennumeration is false then the objects are not iterable