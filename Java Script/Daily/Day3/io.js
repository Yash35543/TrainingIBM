// let programmingLanguages = ["JavaScript", "Python", "Java"];

// console.log(programmingLanguages[0]);
// console.log(programmingLanguages[2]); 


// programmingLanguages[1] = "TypeScript";
// console.log(programmingLanguages); 

// console.log(programmingLanguages.length); 
// let numbers = [10, 20];
// let itemsToAdd = [30, 40, 50];

// for (let i = 0; i < itemsToAdd.length; i++) {
//     numbers[numbers.length] = itemsToAdd[i];
// }

// console.log(numbers);


// let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo"];

// let startIndex = 1;
// let endIndex = 4; 

// let slicedColors = [];
// let counter = 0;

// for (let i = startIndex; i < endIndex; i++) {

//     if (i < colors.length) {
//         slicedColors[counter] = colors[i];
//         counter++;
//     }
// }

// console.log(slicedColors); 


// console.log(colors); 


// let p = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo"];

// console.log(p.totsring)
// console.log(p.shift)

// let fruits = ["Apple", "Banana", "Cherry", "Date"];


// let removedItem = fruits.shift();

// console.log(removedItem); 


// console.log(fruits); 

// const arr2=[1,2,3,4,5,6]
// console.log(arr2.map(x=>x*2))

// const arr3=[8,40,74,56,87,34]
// console.log(arr3.findIndex(x=>x==2))

// const fruits = ['Apple', 'Banana', 'Orange'];

// const defaultResult = fruits.join();
// console.log(defaultResult); 

// let myarr=[6,3,7,2,9,1]
// myarr.sort()
// myarr.revrse
// console.log(myarr)
// console.log(myarr)

// function func(name,age){

//  return console.log("regular function",name,age)
// }
// func("Penny",23)

// const funcExpression = function(name, age) {
//   console.log("function expression", name, age);
// };


// funcExpression("Penny", 23);

// const funcArrow = (name, age) => {
//   console.log("arrow function", name, age);
// };


// funcArrow("Penny", 23);



function sayHello() {
  console.log("Hello from a regular function!");
}

// Calling the function
sayHello();

const sayHelloArrow = () => {
  console.log("Hello from an arrow function!");
};

// Calling the function
sayHelloArrow();

function getProfile(firstName, lastName, age) {
  return `${firstName} is ${age} years old`;
}

// Calling the function and saving the result
const result = getProfile("Penny", "verma", 99);
console.log(result); // Output: Penny is 99 years old


