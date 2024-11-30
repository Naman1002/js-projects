function sayMyname(){
    console.log("N");
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("n");
}
//sayMyname()

function addNumbers(a,b){   //a and b here are called parameters
    console.log(a+b);    
}

result = addNumbers(5,5) // 5 and 5 here are called arguments

//console.log(result) shows undefined

function addNumbers(a,b){   //a and b here are called parameters
    return a+b 
}

function loginUserMessage(name){
    if(username === undefined){
        console.log("Please Enter a Username")
        return
    }
    return `${name} just logged in`
}
// displays the same result
function loginUserMessage(name){
    if(!undefined){
        console.log("Please Enter a Username")
        return
    }
    return `${name} just logged in`
}
console.log(loginUserMessage("Naman")) // Naman just logged in
console.log(loginUserMessage()) //undefined just logged in

// Default values 
function loginUserMessage(name = "Sam"){
    if(!undefined){
        console.log("Please Enter a Username")
        return
    }
    return `${name} just logged in`
}
/// Rise Operator
function cartPrice(...num1){
    return num1;
}
//console.log(cartPrice(200,300,400,500));  //[ 200, 300, 400, 500 ]

function cartPrice(val1,val2,...num1){
    return num1;
}
console.log(cartPrice(200,300,400,500)); //[ 400, 500 ] 200 and 300 are stored in val1 and val2

// //const user = {
//     name:"Naman",
//     billPrices:999
// }
 function userInfo(anyObject){ // The name of the User is : Naman and his bill is : undefined (bill price is spelled wrong)
    console.log(`The name of the User is : ${anyObject.name} and his bill is : ${anyObject.billPrice}`)
 }
 //userInfo(user);

 //directly passing an object
 
 userInfo(
    {
        name:"NamanS",
        billPrice: 1000
    }
 )
 const newArray = [ 200, 300, 400, 500 ]

 function arrayReturn(anArray){
    return anArray[1]
 }
 console.log(arrayReturn(newArray))
 console.log(arrayReturn([400, 500]));
  