import React from 'react'

const Home = ({user}) => {
    console.log("home is rendering");
    
    
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default React.memo(Home,(prevProps,nextProps)=>{
    return prevProps.user.id === nextProps.user.id
})
