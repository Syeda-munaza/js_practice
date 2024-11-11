let myName= "syeda zadi"
let myAge= 22
let myGraduation= "BSCS"
console.log([myName, myAge, myGraduation]);

//----------------------
for(let i=1; i<=10; i++){
    console.log("syeda munaza")}
    console.log("Loop has ended");
   
let sum= 0;
let n= 45;
for(let i=1; i<=n; i++) {
    sum= sum+1
}   
console.log("sum= ", sum);
//-----------------------------------------------------------
for(let j=1; j<=9; j++){
    console.log("j= ", j);
}
 //Infinite loop that never ends--(don't use this loop)
//--------------------------------------------------------------------
// while loop(do some work)----- while(condition{})
 //while loop k andr last pr koi semicolon ni hota 
 let i=1;
 while (i<=5) {
    console.log("Syeda Munaza");
    i++;
 }
 //-------------------------------------------------------------------------------
//d0-while loop(atleast 1 time run)
//do-while klast pr semicolon hota ha
let k=1;
do{
    console.log("k=", k);
    k++;
} while (k<=5); 
//-------------------------------------------------------------------------------------------------
//for-of loop(strings and arrays pr loop lagany pr help krta ha)
let str= "keepcoders";
for(let i of str){
    console.log("i=", i);
    
}
//--------------------------------------------------------------------------------------------------------------
// for-in loops used in object
let student={
    name:"zahra",
    age:34,
    cgpa: 5.7,
    isPass:true,

};
for(let key in student){
    console.log("key=", key, "value=", student[key]);
    
}

//Let practice++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Print all even numbers from 0 to 100
for(let num=0; num<=100; num++){
    console.log("num=", num);
    
}
//for even number
for(let mum=0; mum<=100; mum++){
    if(mum%2===0)
        console.log("mum=", mum);
}

//for odd num---(num%2 !===0)

// const name="keepcoder"
// const myNum= name.num()

//  let fullName= prompt("enter your fullname without spaces");
//  let username= "@" + fullName + fullName.length;
//  console.log(username);
 

 let test1= "A"
 let test2="B"
 let result= test1>test2;
 console.log("Is A is less than B" +result);
 //functions
function myFunction() {
    console.log("Welcome to the learning of JS");
    console.log("Functions of JS");
    
    
}
myFunction();



 










