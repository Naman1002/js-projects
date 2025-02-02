const myNums = [1,2,3];

const newNums = myNums.reduce( (acc,currval) =>{
    console.log(`acc:${acc} and curval:${currval}`)
    return acc + currval
},0);
// acc:0 and curval:1
// acc:1 and curval:2
// acc:3 and curval:3/
const arrNums = myNums.reduce((arr,currval) => arr+currval ,0)

const shoppingCart = [
    {
        name:"Js Course",
        price:299
    },
    {
        name:"Py Course",
        price:399
    },
    {
        name:"Mobile Dev Course",
        price:499
    },
    {
        name:"Data Science Course",
        price:599
    },
]

const pricetoPay = shoppingCart.reduce((acc,item) => acc + item.price ,0);
console.log(pricetoPay); // 1796