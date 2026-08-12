//inference -> sabse pehli baar jo data aap pass karoge uska data type vo khud ko assign ke lega 
// let a = 30
// a = 60

// console.log(a);

//annotation-> hum provide karenge iska type 
// let b:string = "sonu"
// console.log(b);

//primitive data types

//string, 
// let val:string = "horse"

//boolen,
// let val:boolean = true

//number,
// let val:number = 10

//undefined,
// let val:undefined = undefined

//bigint,
// let val:bigint = 87990n // bigint m number ke last m n lagana hota hai

//symbol

// let y:symbol = Symbol("hello")


// -Arrays


let arr: number[] = [5,6,7,8,9,0];
let arr1: string[] = ["hello", "jio",]
let arrBol: boolean[] = [true,false,true,false]


// -Tuples

let arr3:[number,number] = [56,78,]


//enums 

enum Role {
    ADMIN,
    SUP_ADIMIN,
    USER,
}

let role :Role = Role.ADMIN

//union - ek se jada data type decie kar sakete ho

let yolo:string | number = "rahul"
 yolo = 24
 console.log(yolo);
 



