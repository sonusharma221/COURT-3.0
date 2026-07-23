import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { ContextProvider } from './context/MyContext'
import { useEffect } from 'react'

const App = () => {
  
  useEffect(()=>{
  console.log("app rendering");
  },[])
  
  return (

    <div>

      <ContextProvider>
        <Home />
        <About />
        <Contact />
      </ContextProvider>
      {
        
      }
    </div>
  )
}

export default App
