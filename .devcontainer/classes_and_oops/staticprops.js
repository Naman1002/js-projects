class Users{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username:${this.username}`); 
    }
    static createID(){ // static properties are hidden for normal instances and will only be a property for instances that 
        // are specifically being told 
        return `123`
    }
}

class Teacher extends Users{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone =new Teacher("iphone","i@phone.com")

console.log(iphone.createID());
 