import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'
import { axiosInstance } from '../config/axiosInstance'

const UsersPage = () => {
  const [usersData, setUsersData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    let GetUserData = async() =>{
    try {
      let res = await axiosInstance.get('/users')
      console.log(res);
      setUsersData(res.data)
      setIsLoading(false)
      
    } catch (error) {
      console.log("error in user api",error);
      
      
    }
  }

useEffect(()=>{
  GetUserData()
},[])

if(isLoading) return <h1 className= "text-4xl">Loading Users</h1>

return (
    <div className = "grid grid-cols-4 gap-4">

      {
        usersData.map((val)=><UserCard key={val.id} user={val}/>)
      }
    </div>
  )
}

export default UsersPage
