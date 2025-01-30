coding = ["js","ruby","java","python","cpp"]

// forEach

//syntax arr_name.forEach( function () {} ) // functions inside a function are callback functions 
// that tell the forEach method what operations are to be done on every element of the array

coding.forEach(function (){}) // Valid forEach function using generic syntax

//forEach with arrow functions - 
coding.forEach(() => {}) // Valid forEach function using arrow function syntax

// printing each element of the array using forEach() method using the generic way of declaring a function
coding.forEach( function (val){   // Val is the variable name we give to every individual element of the array
    // console.log(val);
})

// printing each element of the array using forEach() method using arrow functions 
coding.forEach((val) => {
    // console.log(val)
})

// Passing on predeclared functions in forEach()

// Pre declared function - 
function printMe(item){
    console.log(item)
}
// Using pre declared function in forEach() 
//coding.forEach(printMe)  // you just have to declare the function and not execute it - coding.forEach(printMe()) -> wrong

//forEach also has access to multiple other parameters namely index and the whole array

coding.forEach((val,index,arr) =>{
  //  console.log(val,index,arr);
})

// for arrays that have objects as elements
const myCoding = [
    {
        id :1,
        language:"Javascript",
        languageFileName:"js"
    },
    {
        id :2,
        language:"Java",
        languageFileName:"java"
    },
    {
        id :3,
        language:"Python",
        languageFileName:"py"
    },
]
myCoding.forEach((val) =>{
    // console.log(val.language)
})

// forEach does not return any values 
// Use return when you need to send a value back from a function.
// Use console.log() for debugging but not for returning values.
// forEach can only be used to iterate within an array

//To get an arrray to return a value based on a specefic condition we use filter array
const myNums = [1,2,3,4,5,6,7,8,9,10]; 

// condition - numbers greater than 4
const newNums = myNums.filter( (num) => num >4 );
// console.log(newNums);

// syntax for filter maps - arr_name.filter(() => condition)
// filter method also uses callback functions
// filter returns only true values
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// condition - give us all the books whose genre is History
    const userBooks = books.filter((bk) => bk.genre === "History" );

// condition - give all the books that have released after 2000
    const latestBooks = books.filter((bk) => bk.publish > 2000 );
    console.log(latestBooks);
    
