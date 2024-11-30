{} // this is scope in the sensse that curly braces that are used to contain a piece of code are the scope of that block of code
// Exception being objects because the objects are a data type

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a)//ReferenceError: a is not defined
//console.log(b)//ReferenceError: b is not defined
//console.log(c)//30 <-- this is an issue because the variables/code defined/written in the scope 
//should only be contained within that block scope which is why var declaration should be avoided


function one(){
    const username = "Hitesh"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    console.log(website) // Gives error
    two()
}
one() // Hitesh

addOne(5) // Gives 6
function addOne(){
    return num+1;
}



addTwo(6) // Gives error due to it being stored in a variable
const addTwo = function (num){
    return num+2
}

