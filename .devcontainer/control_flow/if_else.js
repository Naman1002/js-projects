const score = 200

if(score >100){
    const power = "fly"
    console.log(`Power: ${power}`);
}

// Implicit scope
if(score >10) console.log("Flying");

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// all the other values are Truthy Values
//"0", "false", " ",[],{}, function(){} note that the 0 and false are strings which makes the, truthy
//=== => It checks both the value and the type of the operands. '23' === 23 is False but '23' == 23 is True

// Nullish Coalescing Operator (??)
val1 = 5 ?? 10 // 5 (first value to be assigned)
val1 = null ?? 10 // 10 (value other than null is assigned)
val1 = undefined ?? 20 // 20 (value other than undefined)
val1 = null??10??20 // 10( first value after ??)

// Terniary Operator 

// condition ? true : false
const teaPrice = 100;
teaPrice <=80 ? ("Less Than 80") : ("More than 80"); // More than 80
