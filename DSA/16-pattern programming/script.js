// star kitna pr print karana h
// let prompt = require("prompt-sync")()
// let n = prompt("Enter your n " )
// for(let i = 1; i<=n; i++){
//     process.stdout.write("* "); //yeha horizintally print hoga
// }
// console.log();

//outer loop row ko manage karta hai or inner loop colums ko
// let prompt = require("prompt-sync")()
// let n = prompt("Enter your n " )
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=n; j++){

//         process.stdout.write("* ");
//     }
//     console.log();
// }


// Q- right angel triangel
// let prompt = require("prompt-sync")()
// let n = prompt("Enter your n " )
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// Q-inverted right angel triangle
// let prompt = require("prompt-sync")()
// let n = prompt("Enter your n " )
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

let prompt = require("prompt-sync")()
let n = Number(prompt("Enter your n "))
for(let i = 1; i <= n; i++){
    let ch = 65; // ASCII of A
    for(let j = 1; j <= n - i + 1; j++){
        process.stdout.write(String.fromCharCode(ch) + " ");
        ch++;
    }
    console.log();
}





















