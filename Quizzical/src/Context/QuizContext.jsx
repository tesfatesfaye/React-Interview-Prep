import { nanoid } from 'nanoid';
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext()

const QuizContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [startGame, setStartGame] = useState(() => false)
    const [quizData, setQuizData] = useState(() => [])
    useEffect(() => {
        let info = []
        const answerSetter = (val, correct) => {
            return { id: nanoid(), val: val, correct: correct, selected: false }
        }
        const fetcher = async () => {
            let quizInfo = []
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            info = await data.results
            for (let i of info) {
                quizInfo.push({ id: nanoid(), question: i.question, answers: [] })
                let quizInfoLength = quizInfo.length-1
                for (let j of i.incorrect_answers){
                    quizInfo[quizInfoLength].answers.push(answerSetter(j,false))
                }
                let placer=Math.random()*3
                quizInfo[quizInfoLength].answers.splice(placer, 0, answerSetter(i.correct_answer,true))
            }
            console.log(quizInfo)
        }
        fetcher()
    }, [startGame])

    const nav = (page) => {
        navigate(page)
    }




    return (
        <QuizContext.Provider value={{ nav }}>
            {children}
        </QuizContext.Provider>
    )

}
export { QuizContext, QuizContextProvider };
