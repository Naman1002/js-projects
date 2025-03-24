// declaring a promise
const promises = new Promise(function(resolve,rject){
    // Do an Async Task
    //DB calls, cryptography, networking
    setTimeout(function(){
        console.log("Async Task is complete")
    },1000)
})

//consuming a promise