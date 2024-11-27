arrayOne =[2,3,5,6]
//console.log(arrayOne[2])
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


marvel_heroes = ["Thor", "IronMan","SpiderMan"]
dc_heroes = ["Batman", "Superman", "Flash"]

all_heroes = marvel_heroes.concat(dc_heroes)

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
console.log(all_heroes) 

/// Spread Operators
const all_new_heroes = [...marvel_heroes,...dc_heroes] //removes all the nested arrays and displays all the 
//elements as part of a single array
//[ 'Thor', 'IronMan', 'SpiderMan', 'Batman', 'Superman', 'Flash' ]

const an_array = [1,2,3,[4,5],[6,7,[8,9]]]
another_array = an_array.flat(Infinity) // removes all the nested arrays and displays all the elements as part of a single array
console.log(another_array)

console.log(Array.from("Hitesh")) // ["H","i","t","e","s","h"]

// interview question
console.log(Array.from({name:"Hitesh"})) // returns [] because it cannot determine on which element to convert into array the
// key part or the value part

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) // Returns [100,200,300]

