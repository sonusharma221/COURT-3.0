//ye question self try
// const prompt = require("prompt-sync")()
// let age = Number(prompt(`Enter your age `))
// if(age>=18){
//     console.log("now your are eligible to ride bike");
// }
// else{
//     console.log(`you are not.Wait${age-18} year then you ride bike` );
// }

// Q-
// const prompt = require("prompt-sync")()
// const age = Number(prompt("Enter your age "))
// if(age>=18){
// console.log("your are valid voter");
// }
// else{
//     console.log("your are not a valid voter");
// }

// Q -
// const prompt = require("prompt-sync")()
// let marks = prompt("Enter your marks")
// if(marks>85 && marks<=95){
// console.log("your are excellent");
// }
// else if(marks>75 && marks<=85){
//     console.log("your are good");
// }
// else{
//     console.log("your are fair");

// }

// accept two number and print the greatest between them
// const prompt = require("prompt-sync")()
// let firstnum = prompt("Enter your number 1st num ")
// let secondnum = prompt("Enter your number 2nd num ")

// if(firstnum>secondnum){
//     console.log(`firstnumber ${firstnum} is greater then secondnumber`);

// }
// else if(secondnum>firstnum){
//     console.log(`secondnum ${secondnum} is greater then firstnumber`);

// }
//Q- accept an integer and check whether it is an even number or odd
// const prompt = require("prompt-sync")()
// let num = prompt("Enter your number ")

// if(num%2 === 0){
//     console.log("this is even");

// }
// else{
//     console.log("this is odd");

// }

// accept three number and print the greatest between them
// let prompt = require("prompt-sync")()
// let  firstnum = prompt("Enter your first number ")
// let  secnum = prompt("Enter your second number ")
// let  thirdtnum = prompt("Enter your third number ")

// if(firstnum > secnum &&  firstnum >thirdtnum) {
// console.log("first is greater");
// }
// else if(secnum > firstnum && secnum > thirdtnum ){
// console.log("second is greater");
// }
// else if(thirdtnum>firstnum && thirdtnum >secnum  ){
// console.log("third is greater");
// }

//Q- accept a year and check if it a leap year or not (google to find out what's a leap year)

let prompt = require("prompt-sync")()
let year = prompt("Enter your year ")
if(year % 4 === 0 && year % 100 !=0){
console.log(`${year} is a leap year`);
}
else if(year % 400 ===0){
    console.log(`${year} is a leap year`);
}
else {
    console.log("this is not a leap year");

 }

// Q-Shop discount
// const prompt = require("prompt-sync")()

// let amount = Number(prompt("Enter amount: "))

// let dis = 0

// if (amount > 0 && amount <= 5000) {
//     dis = 0
// }
// else if (amount >= 5001 && amount <= 7000) {
//     dis = 5
// }
// else if (amount >= 7001 && amount <= 9000) {
//     dis = 10
// }
// else if (amount >= 9001) {
//     dis = 20
// }

// let discount = (dis * amount) / 100
// let payable = amount - discount

// console.log(`Discount: ${discount}`)
// console.log(`Your payable amount is ${payable}`)

//Q- bijli bill 
// const prompt = require("prompt-sync")()
// const unit = prompt("Enter the unit ")
// let firstinterest = 100*4.2 
// let secondtinterest = (100*4.2) + (unit-100)*6
// let thirdinterest = (100*4.2) + (100*6) + (unit-200)*8 
// let fourthinterest = (100*4.2) + (100*6) + (200*8) + (unit-400)*13 

// if(unit > 0 && unit<=100) console.log(firstinterest);
// else if(unit >100 && unit <= 200 ) console.log(secondtinterest);
// else if(unit > 200 && unit <= 400) console.log(thirdinterest);
// else {
//     console.log(fourthinterest)
// }

// Q - 
// const prompt = require("prompt-sync")()
// let month = prompt("Enter yout month ")
// let year = prompt("Enter your year ")
// let days = 0
// if(month == 2){
//     if(year % 400 == 0 || year % 4 == 0 && year %100 != 0){
//         days = 29 
//     }
//     else days = 28
// }
//     else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) days = 31

//     else days = 30
//     console.log(days);

// Q- day find with number 
// user se 1 to 7 number lo  1 - monday, 2-tue etc..

// let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter your number "))
// let days = ["Monday","tuesday","wednesday","thursday","friday", "saturday", "sunday"]

// if (num == 1) console.log(days[0]);
// else if(num == 2) console.log(days[1]);
// else if(num == 3) console.log(days[2]);
// else if(num == 4) console.log(days[3]);
// else if(num == 5) console.log(days[4]);
// else if(num == 6) console.log(days[5]);
// else if(num == 7) console.log(days[6]);
// else console.log("invalid number enter between 1 to 7");

// 2nd method
// let prompt = require("prompt-sync")()

// let num = Number(prompt("Enter your number "))

// let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// let found = false

// for(let i = 1; i <= 7; i++){

//     if(num === i){
//         console.log(days[i-1])
//         found = true
//         break
//     }

// }

// if(found === false){
//     console.log("invalid number enter between 1 to 7")
// }

// 3rd method //ye wala method pasand aaya 
//     let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter your number "))
// let days = ["Monday","tuesday","wednesday","thursday","friday", "saturday", "sunday"]

// if (num >=1 && num<=7) console.log(days[num-1]);
// else console.log("Enter valid number between 1 to 7");


