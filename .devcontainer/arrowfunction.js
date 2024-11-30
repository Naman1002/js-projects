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