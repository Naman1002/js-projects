// for of

let arr = [1,2,3,4,5]

for (const value of arr) {
   // console.log(value);
    
}

// with strings
let greetings = "Hello World"

for (const greeting of greetings){
   // console.log(`Each Char is ${greeting}`);
}

// MAPS 
// only hold unique values, holds key-value pairs similar to objects

let map = new Map()
// Insert values into a map
map.set('IN', 'India');
map.set('USA','United States of America');
map.set('Fr','France');

//Looping the Map property
for (const key of map) {
    console.log(key);    
}

//Delimiting the arrays
for (const [key,value] of map) {
    console.log(key,':-',value);
}

// Objexts are not iterable