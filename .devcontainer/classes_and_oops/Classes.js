class User{
    constructor(username,email,password){
        this.username = username;
        this.password = email;
        this.email = password;
    }

    encryptPassword(){
        return `${this.password}@abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName())