import { nanoid } from 'nanoid';
import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizContext = createContext()

const QuizContextProvider = ({ children }) => {
    const navigate = useNavigate() // function used switch starting page to quiz page
    const [startGame, setStartGame] = useState(() => false) // state used to initiate game
    const [quizData, setQuizData] = useState(() => []) // quiz data state
    const [gameCompleted, setGameCompleted] = useState(() => false)
    const location = useLocation();
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
                let quizInfoLength = quizInfo.length - 1
                for (let j of i.incorrect_answers) {
                    quizInfo[quizInfoLength].answers.push(answerSetter(j, false))
                }
                let placer = Math.random() * i.incorrect_answers.length
                quizInfo[quizInfoLength].answers.splice(placer, 0, answerSetter(i.correct_answer, true))
            }
            setQuizData(quizInfo)

        }
        fetcher()
    }, [startGame])

    const currentPage = location.pathname


    const selectAnswerChoice = (id, parentId) => {
        const quizDataClone = structuredClone(quizData)
        const question = quizDataClone.find(item => item.id === parentId)
        const newAnswers = question.answers.map(item => item.id === id ? { ...item, selected: true } : { ...item ,selected:false})
        question.answers = newAnswers
      
        setQuizData(quizDataClone)
    }



    const nav = (page) => {
        navigate(page)
    }




    return (
        <QuizContext.Provider value={{ nav, quizData, currentPage,
         selectAnswerChoice, gameCompleted }}>
            {children}
        </QuizContext.Provider>
    )

}
export { QuizContext, QuizContextProvider };
