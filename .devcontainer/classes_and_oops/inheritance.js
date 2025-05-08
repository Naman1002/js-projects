class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UERNAME:${this.username}`)
    }
}

class User extends Teacher{
    constructor(username,password,email){
        super(username)
        this.password = password;
        this.email = email;
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123");

chai.addCourse();