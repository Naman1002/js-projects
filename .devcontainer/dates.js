let mydate = new Date();
mydate;
mydate.toString();
mydate.toDateString()
mydate.toISOString()
mydate.toJSON()
mydate.toLocaleDateString()
mydate.toLocaleString()

let myCreateDate = new Date(2023,0,10);
myCreateDate.toDateString();

let myCreateDate_2 = new Date(2024,1,10,5,7);
myCreateDate.toLocaleString();

////////////////////////////////////////////// alternate syntaxes
 let createdDate = new Date("01-04-2023")
createdDate;
let myCreatedDate = new Date("2023-01-14");
myCreateDate;

//Getting the timestamps 

let myTimestamp = Date.now()
console.log(myTimestamp);

console.log(createdDate.getTime());

// Getting it into seconds 
console.log(Math.round(myTimestamp/1000));

// Getting the Month and the day
newDate = new Date();

console.log(newDate.getMonth())
console.log(newDate.getDay())

modDate = newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(modDate)
console.log(typeof(modDate))