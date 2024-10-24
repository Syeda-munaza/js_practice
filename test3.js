// Stack and Heap Memory In JS----- How many work in js
// There are 2 types of memoeies
// stack (primitive---you get the copied of the variable you declared ---jo bhi variable declare krwaya ha uska copy kilta ha is ma apko)
// heap (non-primitive ----(original value)you get the reference of original value)

// Example of stack in this it show that how data are stored and copied in another values

let myName="syeda munaza"
anotherName="saba";
// anotherName=myName;
console.log(anotherName);
  
// Example of heap and it show that it provide reference to other one

let firstAge={
    eyeColor: "Brown",
    height: "6inch",
    age: "22",
};
let secondAge=firstAge
console.log(secondAge)
// +++++++++++++++++++++++++++++++++++++++++
                                    //    Strings by harry
// Strings are used to store and manipulate text and it can be created using the following syntax
let name= "Munaza"
console.log(name.length);
// You can also use string in sigle quotes

let friend='mehmona'
// we use .length to calculate the total value
console.log(friend, friend.length); 

console.log(friend[0]);
console.log(friend[4]);

// Template literals
// template literals use backtics(``) instead use of quotes to define a String
// for example: `munaza`

let sister1= "nishwa"
let sister2= "Rida"

// let sentence= `sister1 is a sister of sister2`
let sentence= `${sister1} is a sister of ${sister2}`
console.log(sentence);
// Another string method are

// Escape sequence characters (\')
let fruit= 'Bana\'na'
console.log(fruit);
console.log(fruit.length);
// \n ccharacter creates new line in the string
let fruit2= 'Orang\ne'
console.log(fruit2);
console.log(fruit2.length);
// \n(new line) ---\t(tab)---- \r(carraige return) 
let urDost= 'Ali\tsba'
console.log(urDost);

// Example of uppercase and lowercase
let myDoll= "ayesha";
console.log(myDoll.toUpperCase());
console.log(myDoll.toLowerCase());
console.log(myDoll.slice(2, 5));
console.log(myDoll.replace("ayes", "sab"));

// Manhoos topic numbers and maths
const score= 50067
console.log(score.toString().length);
console.log(score.toFixed(2));
console.log(score.toPrecision(3));

const balance=10000000
console.log(balance.toLocaleString())

// Date topuc in js
let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate= new Date(2023, 0, 23, 5 , 3)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toString());

let myCreatedDate= new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

// Interested topic of date
let newDate= new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth());

// Most imp use of date are given below
newDate.toLocaleString('default',{
    weekday: "long"
})




























