//looping statement
//for loop
for(i=0;i<=10;i++){
    console.log("count is:"+i)
}
//while loop
let a=0;
while(a<3){
    console.log("hello")
    a=a+1;
}
//do while loop
let b=0
do{
    console.log("hi")
    b=b+1
}while(b<3)
    //for using array
let fruits=["apple","orange","grapes"]
let len=fruits.length;
let fruit=" "
for(let i=0;i<len;i++){
    fruit += fruits[i] ;
}
console.log(fruit)

//break
for(i=0;i<=10;i++){
    console.log("count is:"+i)
    if(i==4){
        break;
    }
}
//continue
for(i=0;i<=10;i++){
    console.log("count is:"+i)
    if(i==4){
        continue;
    }
}
//for of
let cars=["bmw","volvo","ford"]
let car=""
for(x of cars){
    car += x ;
}
console.log(car)
//for in 
let detail={fname:"Kishore ",lname:"CS ",Age:"25"}
let text=""
for(x in detail){
    text += detail[x]
}
console.log(text)
//nested loop
for(i=1;i<=3;i++){
    for(j=i;j<=3;j++){
        console.log(i+"*"+j+"="+i*j)
    }
}
//function
function add(...number){
    let sum=0
    for(let num of number){
        sum += num

    } 
    return sum
}
let ans= add(12,13,14);
console.log(ans)
const sub=(y,z) =>
     y-z;
let result=sub(21,12)
console.log(result)
//constructor function
function student(name,age){
    this.name=name
    this.age=age
}
let s1=new student("alice",23)
let s2=new student("john",21)
console.log(s1)
console.log(s2)


