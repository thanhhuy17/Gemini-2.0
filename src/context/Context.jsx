import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const onSend = async(prompt)=>{
        run(prompt)
    }

    onSend("how is the React")

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider