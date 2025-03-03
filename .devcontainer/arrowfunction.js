// this keyword, used for current context

const user = {
    username:"Hitesh",
    price:999,
    welcomeMessage : function(){
    console.log(`${this.username} Welcome to website`) // for example in this object to call out any other property we have to
                                                        // to use this.keyName -> this.username or this.price
    console.log(this)
}                                                      
}

user.welcomeMessage() // Hitesh Welcome to the website + the whole user object
user.username = "Sam"
user.welcomeMessage() // Sam Welcome to the website + the whole user object

//console.log(this) // displays {} because in node there is no global context but in the browser it will display window object 

function chai(){
    username = "Naman"
    //console.log(this) // displays metrics 
    console.log(this.username)// returns undefined

}

/// Arrow Functions
const chai = function() {
    username = "Naman"
    //console.log(this) // displays metrics 
    console.log(this.username)// returns undefined
}
///+++++++++++++++++++++++++++++++++++++++++++++++++
const chai_1 = () => { // the difference lies only in the syntax on the code side
    username = "Naman"
    //console.log(this) // displays empty object
    console.log(this.username)// returns undefined
} 

const addtwo = (num1,num2) => {
    return num1 + num2
}
// implicit return 
const addTwo = (num1,num2) => num1 + num2 // don't have to use return keyword

//function syntaxes

//myArray.forEach( function() {})
//myArray.forEach(() => {});
//myArray.forEach(() => ());