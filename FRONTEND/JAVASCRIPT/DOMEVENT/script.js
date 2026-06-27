let form = document.querySelector("form")
let inp1 = document.querySelector(".Name")
let inp2 = document.querySelector(".gmail")
let inp3 = document.querySelector(".image")
let users = document.querySelector(".users")
let card = document.querySelector(".card")
let edit = document.querySelector(".Edit")



const usersdata = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 24,
    email: "rahul@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 22,
    email: "priya@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Aman Verma",
    age: 26,
    email: "aman@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 21,
    email: "neha@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Rohit Kumar",
    age: 28,
    email: "rohit@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
];

let ui = ()=>{
  card.innerHTML = "";
  usersdata.forEach((elem,index)=>{
    card.innerHTML += `<div class="users">
        <div class="user_card">
            <img src="${elem.image}" alt="there is image">
            <div class="text">
                <p>Name - ${elem.name}</p>
                <p>Email - ${elem.email}</p>
            </div>
            
            <div class="action">
            <button class="edit">Edit</button>
            <button onclick="deleteCard(${index})" class="delete">Delete</button>
            </div>
        </div>
    </div>`
})
}
ui()


form.addEventListener("submit",(events)=>{
    events.preventDefault()
    let name = inp1.value;
    let email = inp2.value;
    let image = inp3.value
    if(name.trim() === "" && email.trim()=== "" &&  image.trim() === "")  return;
    
    usersdata.push({
      name,
      email,
      image,
    })

ui()

    form.reset()

    
})

let deleteCard = (index)=>{
  usersdata.splice(index,1)

  ui()
}
