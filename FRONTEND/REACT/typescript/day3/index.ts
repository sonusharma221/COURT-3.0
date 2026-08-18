//type aliases

// type userObj = {
//     name: string,
//     age:number,
//     company:string,
//     address: {
//         street: string,
//         city: string,
//         state: string
//     },
// };

// let userObj = {
//     name: "rahul",
//     age:45,
//     company:"sheriyansh",
//     address: {
//         street: "malabar road",
//         city: "Mumbai",
//         state: "maharastra"
//     },
// };
// userObj.name = "sonu"

// let sum = (a:number,b:number) =>{
//     return a + b 
// }
// console.log(sum(10,20));



//rest parameter
let sum = (...rest:number[]):number=>{
    let data = rest.reduce((a,v)=>a+v,0)
    return data
}

let res = sum(10,20,30,40,50);
console.log(res);


