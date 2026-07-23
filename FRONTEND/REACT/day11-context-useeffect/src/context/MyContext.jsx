import { useState } from "react";
import { MyStore } from "./MyStore";

//consumer
console.log("context rendering")


//provider
export let ContextProvider = ({children})=>{
    console.log("contextProvider rendering..");
    const [count, setCount] = useState(0);


    return <MyStore.Provider value={{count,setCount}}>
        {children}
    </MyStore.Provider>
}
