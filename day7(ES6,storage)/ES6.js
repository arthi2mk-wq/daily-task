//Arrow function
const arrow = a => a*a;
console.log(arrow(10))
//multiple statement
const even = a =>{
    if(a%2==0){
        return a+" is  an even number"
    }
    return a+" is not even number"
}
console.log(even(4))
//using object
const student =() =>({
    name:"ihtra",
    rollno:23,
    percentage:83
});
console.log(student().name)
//template literals
let product="Apple"
let price=20
let amount=5
let total=`Total price of ${product} is ${price*amount}`
//map
const veg=new Map([
    ["tomato",500],
    ["potato",230],
    ["onion",324]
])
const z=veg.get("tomato")
console.log(`there is ${z} tomato having`)
//for of
let cars=["BMW","Volvo","TATA"]
let text=""
for(let x of cars){
    text +=x+"\n" 
}
console.log(text)

console.log(total)
//destructuring
let fruit=["Apple","Orange","Grapes"]
let[fruit1, ,fruit3]=fruit;
console.log(fruit1)
console.log(fruit3)
//spread operator
let a=["JAN","FEB","MAR","APR","MAY","JUN"]
let b=["JUL","AUG","SEP","OCT","NOV","DEC"]
let Month=[...a,...b]
console.log(Month)