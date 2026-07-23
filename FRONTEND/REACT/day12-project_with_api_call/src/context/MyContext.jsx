import { createContext } from "react";
import { useState } from "react";

export const MyStore = createContext()


export const ContextProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems);

    let increamentQuantity = (id)=>{
        setCartItems((prev)=>{
            return prev.map((val)=>{
                return val.id === id ? {...val, quantity : val.quantity + 1 } : val;
            })
        })
        
    }
    let decrementQuantity = (id)=>{
        setCartItems((prev)=>{
            return prev.map((val)=>{
                return val.id === id ? {...val, quantity : val.quantity - 1 } : val;
            })
        })
        
    }
    
    return <MyStore.Provider value={{isCartOpen, setIsCartOpen, cartItems, setCartItems,increamentQuantity,decrementQuantity}}>
        {children}
    </MyStore.Provider>

}