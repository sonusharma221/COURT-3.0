import axios from 'axios'

 export const getUsers = async ()=>{
    let res = await axios.get('https://fakestoreapi.com/users')
    console.log(res.data);
      console.log("users function runn");
  } 

