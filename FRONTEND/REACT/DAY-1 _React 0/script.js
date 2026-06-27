// let h1 = document.createElement("h1")
// h1.textContent = "what your name"
// document.body.appendChild(h1)

// console.log(h1);

// let Rh1 = React.createElement("h1")
// console.log(Rh1);

// console.log(h1);

let rh1 = React.createElement("h1",{name},React.createElement("h2",null,"i am h2 and h1 is my parent"))
console.log(rh1);

//React dom/ virtual dom --------------

let rh2 = React.createElement("div",{},React.createElement("h2",null,"i am h2 and h1 is my parent"))
let realDomElem = document.querySelector("#root")
let rootOfReact = ReactDOM.createRoot(realDomElem) // ReactDOM hi realdom ko virtual dom se connect karta hai 
rootOfReact.render(rh2)



