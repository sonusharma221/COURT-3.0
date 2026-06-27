let inp = document.querySelector("input")
let btn = document.querySelector(".Add")
let span = document.querySelector("span")
let div2 = document.querySelector(".div2")
btn.addEventListener("click",()=>{
    const value = inp.value

        if(value.trim() === "") return;
            
            div2.innerHTML += `<div class="div2">
            <li>
            <span class="text">${value} </span>
            <button class="btn2">Edit</button>
            <button class="btn3">Delete</button>
            </li>
        </div>`
        

        inp.value = ""
        
    
    
})