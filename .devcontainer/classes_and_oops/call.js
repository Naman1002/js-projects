function setUsername(username){
    // complex DB calls
    this.username = username; 
}

function createUser(username,email,password){
    //setUsername(username) not getting called, this syntax is only giving a reference to the setUsername method
    setUsername.call(this,username) // now the setUsername is getting called and using this keyword createUser method 
    // is giving it's own execution context so that when setUsername is executed the context is not lost 
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb.com","123");
console.log(chai)