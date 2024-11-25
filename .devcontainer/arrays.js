arrayOne =[2,3,5,6]
console.log(arrayOne[2])
const arrayTwo = new Array(2,3,4,5,6) 

arrayTwo.push(7) // adds 7 as the last element
arrayTwo.push(8) // adds 8 as the last element

arrayTwo.pop() // removes the last element
arrayTwo.unshift(9) // adds 9 as the first element 
arrayTwo.shift() // removes the last element
arrayTwo.includes(7) // Gives a boolean value to the question of the array including 7
arrayTwo.indexOf(3) // Gives the index of the element 3

const arrayThree = arrayTwo.join() //Adds all the elements of an array into a string, separated by the specified separator string.
// The datatype of arrayThree is string

arrayTwo.splice(1,3) // returns the elements in the index of 1,2 and 3 but also removes these elements from the original array
arrayTwo.slice(1,3) // returns the elements in the index 1 and 2 and keeps the original array untouched