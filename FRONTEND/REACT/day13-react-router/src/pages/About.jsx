import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import NestedAbout from './NestedAbout'

const About = () => {
    let navigate = useNavigate()
  return (
    <div>
      <h1>this is about pages</h1>
        <button onClick={()=> navigate("nested")}>nested ko dekho</button>
      <Outlet />
    </div>
  )
}

export default About
