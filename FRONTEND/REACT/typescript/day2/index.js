"use strict";
//inference -> sabse pehli baar jo data aap pass karoge uska data type vo khud ko assign ke lega 
// let a = 30
// a = 60
Object.defineProperty(exports, "__esModule", { value: true });
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
let arr = [5, 6, 7, 8, 9, 0];
let arr1 = ["hello", "jio",];
let arrBol = [true, false, true, false];
// -Tuples
let arr3 = [56, 78,];
//enums 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADIMIN"] = 1] = "SUP_ADIMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.ADMIN;
//union - ek se jada data type decie kar sakete ho
let yolo = "rahul";
yolo = 24;
console.log(yolo);
//# sourceMappingURL=index.js.map