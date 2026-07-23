import { createContext,useState } from "react";

//setup out blank store--
const MyStore = createContext()

//make a provider of our  store who handle data
//and serves to the customers
export const ContextProvider =({children})=>{
    const [centralValue, setCentralValue] = useState("mai context se hu")
    return <MyStore.Provider value={centralValue}>
        {children}
    </MyStore.Provider>
}