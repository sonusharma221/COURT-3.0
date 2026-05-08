// let i = 10
// do{
//     console.log("hii");
//     i++
// }while(i<15)

// *number guess*
// let prompt = require("prompt-sync")()
// let computer = (Math.floor(Math.random()*100)+1)
// // console.log(computer);
// let user;
// do{
//     user = Number(prompt("Enter your number between 1 to 100-: "))
//     if(user>computer) console.log("Too large");
//     else if(user<computer) console.log("Too small");
//     else if (user == computer) console.log("congrulation, you guessed number correctly !");
//     else console.log("Invalid number");
// }while(user != computer)


// sasta calculator


let prompt = require("prompt-sync")()
let n;
do{
    console.log("Enter 1 for addition ");
    console.log("Enter 2 for subtraction ");
    n = Number(prompt("enter your number "))
    switch (n) {
        case 1:{
        let a = Number(prompt("Enter your first number "))
        let b = Number(prompt("Enter your second number "))
        console.log(`addition ${a+b}`);
            break;
    }
        case 2:{
        let a = Number(prompt("Enter your first number "))
        let b = Number(prompt("Enter your second number "))
        console.log(`subtraction ${a-b}`);
            break;
}
        default:
            console.log("Enter a valid number");        
}
    n = Number(prompt("Enter 10 for recontinue program"))
}
while(n==10);