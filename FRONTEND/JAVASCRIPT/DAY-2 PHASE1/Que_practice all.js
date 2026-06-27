// use console.table() to display an array of 5 numbers

// let fruit = ["mango", "apple", "banana", "orange", "grapes"]
// console.table(fruit);

//create two variable and swap their value

// let a = 10;
// let b = 20;

// [a,b] = [b,a]

// console.log(a,b);

// let a = 10;
// let b = 15;

// // let c = a;
// //  a = b;
// //  b = c;
// // console.log(a,b);

// let c = a + b
// b = c-b
// a = c-b
// console.log(a,b);

// const pi = (22/7).toFixed(3)
// console.log(pi);

// let Name;
// console.log(Name);

// let score = 9

// score += 10
// console.log(score);

// let firstName = "sonu"
// let lastName = "sharma"
// let fullName = "sonu sharma"

// let a = null
// console.log(typeof null); // answer is object

// let bigt = 543888888888888888888888888888888888n
// console.log(bigt);
// console.log( typeof bigt);


// let a = Number("10")
// let a = 12
// num = a.toString()
// console.log(typeof num);


// let b = "true"
// let c = JSON.parse("true")
// console.log(typeof c);

// let vl = Number("123abc") //ans is nan(not a number)
// console.log(vl);

// let px = parseInt("500px") //parseInt number se string ko remove kar deta hai  
// console.log(px);

// let reminder = 25%4
// console.log(reminder);

// let square = 987**2
// console.log(square);

// let a = 10
// console.log(a++); //10
// console.log(a); //11

// let str = "sonuSharma"
// console.log(str.length);

// let lc = "SONU"
// let uc = "sonu"
// console.log(lc.toLowerCase());
// console.log(uc.toUpperCase());


// let sent = "do you learn javaScript"

// let search = sent.includes("javaScript")
// console.log(search);

// let gret = "hello world aa  fderfd hgfds"
// let word = gret.split(" ")
// // console.log(word);
// let result = word[5]
// console.log(result);


// let val = '';
// let b = Boolean(val);
// console.log(b);

// if(true*0){
//     console.log("hii");
    
    
// }
// else{
//     console.log("else");
    
// }

// let s = "Hello, World!";
// console.log(s.includes("Hello"))

// console.log(parseInt("3.14fkfk"));

// let frui = "mango"
// let newFruit = frui.replace("mango","apple")

// console.log(newFruit);

// let course = "html,css,js"
// let singleCourse = course.split(",")
// console.log(singleCourse);


// let str = " sonu kumar shar ma "
// let fullName = str.trim()

// console.log(fullName);

// let Name = "onu kuamr "
// let firstchar = Name[0]
// console.log(firstchar);


//*number and math---------------
//Q-2
// let a = 81
// console.log(Math.sqrt(81));
 
// Q-3 
// Find the maximum number from 10, 20, 5, 99.
// let num = [10,20,5,99]
// let max = Math.max(10,25,5,99)
// console.log(max);

// 4. Generate a random number between 1 and 10.
    // let rn =Math.floor(Math.random()*10) + 1
    // console.log(rn);
    
// 5. Convert `"99.99"` into an integer.
    // let num = 99.99
    // console.log(Math.floor(num));

    
// 6. Check whether `25` is an integer or not.
// console.log(Number.isInteger(25));

// 7. Use `toFixed(2)` on `3.141592`.
// let num = 3.141592
// console.log(num.toFixed());

// ## Conditionals
// 1. Check whether a number is positive or negative.
    // let num = -0
    // if(num>=1) console.log("this is positive number");
    // else if (num===0 && num === -0) console.log("this is neutral");
    // else console.log("this is negative");

// 2. Check whether a number is even or odd.

// let num = Number(prompt("entet your number "))
// if(num%2===0) console.log("this is even number");
// else console.log('this is odd');



// 3. Check whether a person is eligible to vote.
    // let age = 18
    // if(age>=18)console.log("now you can eligable to vote");
    // else console.log("you are not ");
    
    
// 4. Find the largest among two numbers.
    // let a = 40
    // let b = 20
    // if (a>b) console.log(`${a} is greater than ${b}`);
    // else if(b>a) console.log(`${b} is greater than ${a}`);
    
    
// 5. Find the largest among three numbers.
    // let a = 10
    // let b = 1
    // let c = 10
    // if (a>b && a>c)
    //     console.log(`${a} is greater than ${b},${c}`);
    
    // else if(b>a&& b>c) console.log(`${b} is greater than ${a},${c}`);
    // else if (c>a && c>b) console.log(`${c} is greater than ${a} and ${b}`);

    
    
// 6. Check whether a year is a leap year.
// let year = 900
// if(year%4===0 && year%100 !==0 || year%400===0)console.log("this is leap year");
// else console.log("this is not");


// 7. Check whether a number is divisible by both 3 and 5.
    // let num = 25
    // if (num%3===0&&num%5===0) console.log("this is divisible by both");
    // else if(num%3===0) console.log("this is divisible by 3  not 5");
    // else if(num%5===0) console.log("this is divisible by 5 not 3");
    // else console.log("this is not divisible");

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

// let grading = 100
// if(grading>100) console.log("this is invalid");
// else if(grading>90) console.log("A");
// else if(grading>75) console.log("B");
// else if(grading>50) console.log("C");
// else if(grading<=50) console.log("Fail");
// else console.log("this is not valid grading");



// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.


























