console.log("hello world");


// var vs condt vs let

// var a=45
//  var a=50
// console.log(a);


// let b=75
// b=80
// console.log(b);

// const c=69

// console.log(c);

let a=4
let b=5
console.log(a+b);
console.log(b%a);
console.log(a*b);
console.log(a**b);
console.log(b-a);

let res= a!==b
console.log(res)
let c=66
console.log(c++,c++,++c,++c,c,c++,++c,c,c++)
let age=18
let hasid=false
if(age>=18||hasid)
{
    console.log("allowed");
}
else
{
    console.log("not allowed");
}
let num = 7;

let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);
let A = 20;
let B = 35;

if (A % 10 === 0 || B % 10 === 0) {
  console.log(true);
} else {
  console.log(false);
}
let N = 1234;

let first = (N - (N % 1000)) / 1000;
let last = N % 10;

console.log(first);
console.log(last);

let X=2
let Y=1
console.log(X < 10 && X>Y);

let p=87
let q=90
let r=65
let sum = p + q + r;
let avg = (sum / 3).toFixed(2);

console.log(sum);
console.log(avg);