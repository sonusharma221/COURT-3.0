// Q-1
// let prices= [100,250,500,150,700];
// let premiumProduct = prices.filter(function(val){
//     if(val>300){
//         return val
        
//     }
    
// })
// console.log(premiumProduct);

// Q-2 second method
// let marks= [80,90,70,85,95];
// let total = marks.reduce((a,b)=>{
//     return (a + b)
// },0)/marks.length
// console.log(total);



// Q-3 
// let numbers= [1,2,3,2,4,2,5,1,1,1];
// let new_number = numbers.forEach((a,b)=>{
//     // console.log(a,b);
//     if(a === numbers[b]){
//         console.log(a);
        
//     }
    
    
    
// })
// console.log(new_number);

// let numbers= [1,2,3,2,4,2,5,1,1,1];
// let count = {}
// for(let i = 0; i<numbers.length; i++){
//     let num = numbers[i]
//     if(count[num]){
//     count[num]= count[num] +1

//     }else {
//         count[num] = 1
//     }
// }

// console.log(count);

// let frequent = 0 
// let mostFrequent;
// for(let key in count){

//     if()
    
// }

// Q-4 update value
// let user= {
// name:"Ritik",
// age:20
// };

// console.log(user.age);
// user.age = 21
// console.log(user.age);

// Q-5 
// let user= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };
// let newuser = Object.entries(user) 
// for (const [key,value] of newuser) {
//     console.log(key,value);
    
// }

// Q-6 

// let employees= {
// aman:25000,
// ritik:50000,
// priya:45000,
// };

// Q-7 
// let greet = function(name){
// return `hello ${name}`
// }
// console.log(greet("ritik"));


// Q-8 
// let calculateDiscount = function(price){
//     return  price - (price/100)*10
// }
// console.log(calculateDiscount(17000));

// Q-9 
let sum = function(...num){
    let totalNum = num.reduce((a,b)=>{
        return a+b
    },0)
    totalNum()
}
console.log(sum(1,2,3,4,5));









