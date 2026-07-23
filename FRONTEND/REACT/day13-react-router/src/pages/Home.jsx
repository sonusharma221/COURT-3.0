import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>this is home pages</h1>
    <Outlet />
    </div>
  )
}

export default Home
