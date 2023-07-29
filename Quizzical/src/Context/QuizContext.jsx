import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext()

const QuizContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const nav = (page) => {
        navigate(page)
    } // function for navigating to the quiz page



    return (
        <QuizContext.Provider value={{ nav }}>
            {children}
        </QuizContext.Provider>
    )

}
export { QuizContext, QuizContextProvider };
