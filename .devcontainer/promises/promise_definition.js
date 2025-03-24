// A normal Promise syntax
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    setTimeout(function(){
        console.log("Async Task is Complete")
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// Promise without being stored in a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async is complete")
        resolve();
    },1000)
}).then(function(){
    console.log("Promise Consumed");
})

// Promise with data to pass on

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Naman",email:"naman@example.com"});
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

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

promiseFour.then().catch()
