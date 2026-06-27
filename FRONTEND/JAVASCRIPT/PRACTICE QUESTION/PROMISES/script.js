// async function dataLao(){
//     let response = await fetch("fetch('https://jsonplaceholder.typicode.com/todos/1')")
//     let data = await response.json()
//     console.log(data);
    
//     // console.log(response);
    
// }

// dataLao()

// let p1 = new Promise(function(resolve,reject){
//     console.log("promise is pending...");
//     let result = true
//     setTimeout(()=>{
//         if(result) {
//             console.log("resolve");
//             resolve()
//         }
//             else{
//                 console.log("reject");
//                 reject()
//         }
//     },3000)
// })

// p1.then(function(){
//     console.log("promises is fullfield");
    
// })
// .catch(function(){
//     console.log("promises is rejected");
    
// })
// .finally(function(){
//     console.log("promises ended");
    
// })



// function foodOrder(){
// let myOrder = new Promise(function(resolve,reject){
//     console.log("Order is coming...");
//     let orderStatus = true
// setTimeout(() => {
//         if(orderStatus){
//         console.log("Delivery wale bhaiya aagye hai📦");
//         resolve()
//     }
//     else{
//         console.log("order is failed❌");
//         reject()
//     }
// }, 3000);
// })
// myOrder.then(function(){
//     console.log("now make a payment💸");
//     let paymentStatus = true
//     return new Promise(function(resolve,reject){
//         if(true){
//             console.log("nacho nacho");
//             resolve()
//         }else{
//             console.log("order nhi mila");
            
//             reject()
//         }
//     }).then(function(){
//         console.log("finally aagya order");
        
//     })
// }).catch(function(){
//     console.log("Complain karo😡");
    
// })
// }

// foodOrder()

// fetch('https://fakestoreapi.com/products/10')
// .then(function(data){
//     console.log("data milgya✅");
//     return data.json()
// })
// .then(function(mydata){
//     console.log(mydata);
    
// })
// .catch(function(){
//     console.log("data nhi mila❌");
// })



// optional chaining
// let obj = {
//     Name: "sonu",
//     age: 22,
//     company: {
//         Name:"sheryians"
//     },
// }
// console.log(obj.company?.Name);

