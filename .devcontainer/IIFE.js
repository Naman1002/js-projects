//Immidiately Invoked Function Expressions(IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected`)
})(); // The Semi colon is required here otherwise the code interprettor will not know when to stop the function

(() => {
    console.log(`DB Connected 2`)
})();

((name) => {
    console.log(`DB Connected 3 ${name}`)
})(`Naman`);