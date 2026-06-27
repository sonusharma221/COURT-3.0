// Q-1
// let user = {
//     Name : "ritik",
//     age : 23,
//     greet : function(){
//         console.log(this.Name);

//     },

// }
//     user.greet()

// Q-2

// "use strict"; //strict ka use karoge to undefind aayega and without strict mode browser m window and node mai kuch - kuch milega
// function show() {
// console.log(this);
// }
// show();

// Q-3
// function introduce() {
// console.log(this.name);
// }
// const person= {
// name:"Ritik"
// };

// introduce.call(person)
// Q-4
// function introduce(city,country) {
// console.log(`${this.name} from${city}`);
// }
// const person= {
// name:"Ritik"
// };
// let newintro = introduce.apply(person,[" bhopal"]) //apply ke arugment mai object pass karna hota hai


// Question 5 — Fix Lost this
// const user= {
// name:"Ritik",
// greet() {
// console.log(this.name);
// }
// };
// const fn=user.greet.bind(user);
// fn()


// Question 6 — Create an Inheritance Chain

// const animal= {
// eats:true
// };
// const dog = Object.create(animal)
// console.log(dog.eats);

// Question 7 — Prototype Method

// function Person(name) {
// this.name=name;
// }

// Person.prototype.greet = function(){
//     console.log(`hello good morning ${this.name}`);

// }
// let sonu = new Person("sonu")
// let rishu = new Person("rishu")
// let shubham = new Person("shubham")

// sonu.greet()
// rishu.greet()
// shubham.greet()

// Question 8 — Student Class System
class Students {
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
getGrade() {
    if(this.marks>=90){
        return `${this.name} your grade is A`
    }
    else if(this.marks>=75){
        return `${this.name} your grade is B`
    }
    else if(this.marks>=60){
        return `${this.name} your grade is C`
    }
    else{
    return("fail");
    } 
    }

}

const student1 = new Students("sonu",40)
console.log(student1.getGrade())


