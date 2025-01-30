const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((num) => num+10 );


// Map function syntax - .map((var) = > condition) 
// map function also uses a callback function 

// Chaining - using .map().map() or .map().filter()
const newNums = myNums.map((vr) => vr*10).map((vr) =>vr+1).filter((vr) =>vr >40)
console.log(newNums);