// Question 1 — Synchronous vs
// Asynchronous

// console.log("start");
// setTimeout(()=>{
//     console.log("i am settimeout");
    
// },4000)
// console.log("end");


// Question 2 — Simple Callback

// function greet(name){
//     console.log(`hello ${name}`);
// }
// function welcome(){
//     let user = "ritik"
//     greet(user)
// }
// welcome(greet)


// Question 3 — setTimeout with Arguments

//this is the first method
// function greet(name) {
// console.log(`Hello ${name}`);
// }

// setTimeout(() => {
//      greet("ritik")
// }, 2000);


//this is the 2nd  method and easy 
// function greet(name) {
// console.log(`Hello ${name}`);
// }
// setTimeout(greet,2000,"ritik");


// Question 4 — Stop a Timer
// Create a timer:
// setTimeout(...)
// scheduled for 5 seconds.
// Cancel it before execution.

let settm = setTimeout(()=>{
console.log("hiii");
},5000)

clearTimeout(settm)





