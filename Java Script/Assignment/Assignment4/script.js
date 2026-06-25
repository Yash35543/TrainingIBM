

// Q1. Find the Product.

let product = 1;
for (let i = 0; i < N; i++) {
    product *= arr[i];
}
console.log(product);

// Q2. Find the Sum.
let sum = 0;
for (let i = 0; i < N; i++) {
    sum += arr[i];
}
console.log(sum);

// Q3. Count Occurrences

let count = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] === K) {
        count++;
    }
}
console.log(count);

// Q4. Even Odd


let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] % 2 === 0) {
        evenSum += arr[i];
    } else {
        oddSum += arr[i];
    }
}
let B = [evenSum, oddSum];
console.log(B.join(" "));

// Q5. Find whether the number is present or not


let isPresent = "NO";
for (let i = 0; i < N; i++) {
    if (arr[i] === M) {
        isPresent = "YES";
        break; // Stop searching once found
    }
}
console.log(isPresent);


// Q6. Higher Age


let result = [];
for (let i = 0; i < N; i++) {
    if (arr[i] >= 18) {
        result.push(arr[i]);
    }
}
console.log(result.join(" "));


// Q7. Increment the Array Elements

let updatedArr = [];
for (let i = 0; i < N; i++) {
    updatedArr.push(arr[i] + 1);
}
console.log(updatedArr.join(" "));


// Q8. Pass or Fail


let allPass = "YES";
for (let i = 0; i < N; i++) {
    if (arr[i] < 32) {
        allPass = "NO";
        break; // No need to check further if one student fails
    }
}
console.log(allPass);


// Q9. Unique Color Shirt 

let frequencyMap = {};

// Count how many times each color shirt appears
for (let i = 0; i < N; i++) {
    let color = arr[i];
    frequencyMap[color] = (frequencyMap[color] || 0) + 1;
}

let uniqueCount = 0;
for (let color in frequencyMap) {
    if (frequencyMap[color] === 1) {
        uniqueCount++;
    }
}
console.log(uniqueCount);

// Q10. Min and Max


let min = arr[0];
let max = arr[0];

for (let i = 1; i < N; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(min + " " + max);