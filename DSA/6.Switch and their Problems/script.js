// const prompt = require("prompt-sync")()
// let n = Number(prompt("Enter your n number "))
// switch (n) {
//     case 1:{
//         console.log("monday");
//         break;
//     }
//     case 2:{
//         console.log("tuesday");
//         break;
//     }
//     case 3:{
//         console.log("wednesday");
//         break;
//     }
//     case 4:{
//         console.log("thrusday");
//         break;
//     }

//     default:
//         console.log("enter a valid number");
// }


// Q- using switch (Check consonent or vowel using  switch)
//  const prompt = require("prompt-sync")()
// let s = prompt("Enter your string: ")
// let vowel = 0 ,consonent = 0

// for (let i = 0; i < s.length; i++) {
//     let ch = s.charAt(i)
//     switch (ch) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u": 
//         vowel ++
//             break;
//         default:
//             consonent++
//             break;
//     }
// }
//  console.log("vowel is:" + vowel);
//     console.log("consonent is :" + consonent);

//write a program to calculate the area of a circle, rectangle, and triangle using a switch statement 
// Area of circle = pie * r*r
// Area of sqeare = length * breadth 
// Area of triangle = 1/2 * base * height

const prompt = require("prompt-sync")()
console.log("Enter 1 for  area of rectangle ");
console.log("Enter 2 for area of square ");
console.log("enter 3 for area of triangle ");
let n = Number(prompt())
switch (n) {
    case 1:{
        let length = prompt("Enter your length: ")
        let bridth = prompt("Enter your bridth: ")
        console.log(length * bridth);
    }
    case 2:{
        let side = prompt("Enter your side")
        console.log(side * side );
    }
    case 3:{
        let base = prompt("Enter your base: ")
        let height = prompt("Enter your height: ")
        console.log((base * height )/2);
    }
        
        break;

    default:
        console.log("this is valid number only choose btw 1 to 3");
        
        break;
}



