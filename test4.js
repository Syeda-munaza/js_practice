//         Arrays
// Array are the coolection of data in a single variable        

let a=[23, 45, 56, 78,"Munaza", "not present"]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log("The length of class 8 is", a.length);
console.log(typeof a);

// Array method in js
// toString method----------
let num= [1, 4, 78, 56]
let b= num.toString()  //b is now a string
console.log(b); 
//join method
let c= num.join("_")
console.log(c);
console.log(typeof c);
//pop element removes last element from the array
num.pop()
console.log(num);
//push add a new element at the end f array
let fruits = ['apple', 'banana'];
fruits.push('orange'); // Adds 'orange' to the end
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.push('grape', 'kiwi'); // Adds multiple elements
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']
//use of shift(removes first relement and returns it) and unshift(adds a element to the begining retuen new array length)
let numbers = [1, 2, 3, 4];
let firstElement = numbers.shift(); // Removes 1
console.log(firstElement); // Output: 1
console.log(numbers); // Output: [2, 3, 4]
//unshift method
let fruit = ['banana', 'orange'];
let newLength = fruit.unshift('apple'); // Adds 'apple' at the beginning
console.log(newLength); // Output: 3
console.log(fruit); // Output: ['apple', 'banana', 'orange']

fruits.unshift('grape', 'kiwi'); // Adds multiple elements
console.log(fruit); // Output: ['grape', 'kiwi', 'apple', 'banana', 'orange']

//delete ---------(interview question is ---if we use delete array then the length is not decrese it would be same )
let num2=[1,2,3,4,5,6,7,8]
delete num2[0]
console.log(num2.length);

// //concat method(is used to merge two or more arrays) use in js --------------MOST IMPMETHOD USED IN ARRAY
let array1= [1,2,3,4]
let array2= [5,6,7,8,9]
let array3= [10,11,12,13,14]
let totalArray= array1.concat(array2, array3)
console.log(totalArray);

//sort method(modify the original array) ye chotay s bary ma la k jataa ha
let numbber= [93, 45, 87, 119]
let sorting = numbber.sort()
console.log(sorting);

// compare function in sort



//splice and slice

//array forEach

//array map()

//array filter()












