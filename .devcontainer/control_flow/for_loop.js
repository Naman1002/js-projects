// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

// Nested For
for (let i = 0; i <=10; i++) {
    console.log(`Outer Loop Value ${i}`);
    for (let j = 0; j <10; j++) {
        //console.log(`Iner Loop Value ${j} and Outer Loop Value ${i}`);
        console.log(i+ '*' + j + '=' + i*j)
    } 
}

let myArray = ["flash","batman","Superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}