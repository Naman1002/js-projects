// The Promise object represents the eventual
// completion (or failure) of an asynchronous operation and in resulting value

// This means that this object is IN QUEUE but will not be completed instantly

// cryptography, file reading etc.

// Promises have 3 states - 1.Pending 2.Fulfilled 3.Rejected 

// A normal Promise syntax
// Promise has two states - Resolve or Reject
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    setTimeout(function(){
        console.log("Async Task is Complete")
        resolve();
    },1000)
})

// consuming the promise or executing a promise
promiseOne.then(function(){
    console.log("Promise Consumed");// (After 1 second) Async Task is completed
                                    //Promise Consumed
})                                  // We only see "Promise Consumed in the console after we invoke the resolve() method"


// Promise without being stored in a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async is complete") 
        resolve();                          // resolve passes the values that the promise collected to the .then() method where it 
    },1000)                                // then displays the information collected by the function 
}).then(function(){                       // without being stored in a variable .then() is attached after the end of promise only
    console.log("Promise Consumed");
})

// Promise with data to pass on using resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Naman",email:"naman@example.com"});
    },1000)
})
promiseThree.then(function(user){        // if we are passing values in resolve then .then() automatically expectes some value 
    console.log(user)                   // to be passed in the callback function hence we can use "user" that will carry the data  
})                                     //  from the resolve to the .then() method 

//Promise with error checking
promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Naman",password:"naman123"})
        }else{
            reject("Error:Something went wrong")
        }
    },1000)
})
promiseFour.then((user) =>{ // to get a specefic value from the resolve you have to chain .then() method
    console.log(user);     //  the first .then() get all the passed down info from the promise
}).then((username) =>{    //   the chained .then() method gets the more specefic value from the first .then() function  
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>{console.log("Finally the promise is resolved or rejected")}) //used to say that the promise is resolved finally

// Using promises with ASYNC AWAIT
let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:"javascript123"})
        }else{
            reject("Error:JS went wrong")
        }
    },1000)
})

// If the promise throws error then it is essential to use catch block in async await
async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }  
}

consumepromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         console.log(response)
//         const data = await response.json() // the await here is added because it takes some time to convert it JSON
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
    
// }
// getAllUsers()

// The same function in .then() format

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>{
    return response.json
})
.then((data) =>{
    console.log(data)
})
.catch(error =>{console.log(error)})