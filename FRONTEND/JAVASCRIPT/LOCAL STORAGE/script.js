// localStorage.setItem("name","sonu")
// let lsd = localStorage.getItem("name")
// console.log(lsd);

let data = [
    {
    name:"sonu",
    age:21,
    address:"khajepur"
    },
    {
    name:"rishu",
    age:23,
    address:"khajepur"
    },
    {name:"rohan",
    age:20,
    address:"khajepur"
    },
    {name:"vishal",
    age:20,
    address:"khajepur"
    },
]


localStorage.setItem("myFriend",JSON.stringify(data))
let lsd = localStorage.getItem("myFriend")
let value = JSON.parse(lsd)
// console.log(value);
localStorage.removeItem("myFriend")




