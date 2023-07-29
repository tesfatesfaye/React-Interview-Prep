import React, { createContext } from "react";
import { useNavigate } from "react-router";

const quizContext=createContext()

const quizContextProvider=({children})=>{
const nav=(page)=>{
    useNavigate(page)
} // function for navigating to the quiz page



return(
    <quizContext.Provider value={{nav}}>
        {children}
    </quizContext.Provider>
)

}
export {quizContext,quizContextProvider}