const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by Apple'
}

for (const key in myObject) {
   // console.log(myObject[key])
}

for(const key in myObject){
    console.log(`${key} is a shortcut for ${myObject[key]} programming language`);
}

// ${key} is indicating the key in key value pair in the object and ${myObjectKey} is indicating to the value

// for_of loops are used for arrays
// for_in loops are used for objects