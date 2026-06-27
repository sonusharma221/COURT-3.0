let main = document.querySelector("main")
let box = document.querySelector(".box")
let btn = document.querySelector("button")
// console.log(btn);


btn.addEventListener("click",()=>{
let rY= Math.random()*100
let rX = Math.random()*100
box.style.top = `${rY}%`
box.style.left = `${rX}%`
})