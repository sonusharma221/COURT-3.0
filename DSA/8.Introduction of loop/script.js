// let prompt = require("prompt-sync")()
// let n = prompt("Enter your n ")

// for(let i = 1; i<= n; i++){
//     console.log(i);
// }

//Q-17 Accept an integer and print hello world n times
// let prompt = require("prompt-sync")()
// let n = prompt("Enter the value of n ")
// for(let i = 0; i < n; i++){
//     console.log("Hello");
    
// }

// Q-18 print natural number up to n.
// let prompt = require("prompt-sync")()
// let n = prompt("Enter the value of n ")
// for(let i = 1; i <= n; i++){
//     console.log(i);
    
// }
// Q-19 Reverse  for loop .print n to 1.
// let prompt = require("prompt-sync")()
// let n = prompt("Enter the value of n ")
// for(let i = n; i >= 1; i--){
//     console.log(i);
// }
// Q-20 take a nuber as a input and print its table
    // 5*1 = 5
    // 5*2 = 10 ...up to 10 terms

//     let prompt = require("prompt-sync")()
// let table = prompt("Enter the value of table ")
//     for(let i = 1; i <= 10; i++){
//         console.log(i * table);
//     }
// Q-21 sum up to n terms ex- 1+2+3+4+5 = 15
// let prompt = require("prompt-sync")()
// let n = prompt("Enter the value of n ")
// let sum = 0
// for(let i = 0; i<=n; i++){
//     sum += i
// }
// console.log(sum);
// Q-22 factorial of a number ex - 1*2*3*4*5
// let prompt = require("prompt-sync")()
// let n = prompt("Enter the value of n ")
// let sum = 1
// for(let i = 1; i<=5; i++){
//     sum *= i
// }
// console.log(sum);


// Q-23 print the sum of all even & odd numbers in a range // ex - 5 or 10 ke bich even number ko   add and odd number ka add
// let prompt = require("prompt-sync")()
// let a = Number(prompt("Enter the value of a "))
// let b = Number(prompt("Enter the value of b "))
// let evenSum = 0, oddSum = 0
// if(a>b){
// [a,b] = [b,a]
// }
// for(let i = a; i<=b; i++){
//     if(i%2 ==0) evenSum += i
//     else oddSum += i
// }
// console.log(evenSum);
// console.log(oddSum);



// Q-24 print all the factors of a number.
// 1st method
//     let prompt = require("prompt-sync")()
// let n = Number(prompt("Enter the value of a "))

// for(let i = 1; i<=n; i++){
//     if(n%i == 0){
//         console.log(i);
//     }
// }


// 2nd method
//     let prompt = require("prompt-sync")()
// let n = Number(prompt("Enter the value of a "))

// for(let i = 1; i<=n/2; i++){
//     if(n%i == 0){
//         console.log(i);
//     }
// }
// console.log(n);

// Q-25 Check if the number is prime or not
    let prompt = require("prompt-sync")()
let n = Number(prompt("Enter the value of n "))
if(n<=0) console.log("not a prime number");

    count = 0
for(let i = 2; i<=n/2; i++){
    if(n%i == 0) count ++
}
if(count == 0) console.log("prime number");
else console.log("not prime number");














