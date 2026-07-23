import { useContext } from 'react'
import { MyStore } from '../context/MyStore';

const Contact = () => {
  let { count } = useContext(MyStore)
  console.log(count);
  console.log("contact rendering");
    
  return (
    <div>
      <h1>contact</h1>
    </div>
  )
}

export default Contact
