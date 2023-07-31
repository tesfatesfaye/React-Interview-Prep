
import React, { createContext, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetcher from '../../Util/fetcher';

const QuizContext = createContext()

const QuizContextProvider = ({ children }) => {
    const navigate = useNavigate() // function used switch starting page to quiz page
    const [startGame, setStartGame] = useState(() => false) // state used to initiate game
    const [quizData, setQuizData] = useState(() => []) // quiz data state
    const [gameCompleted, setGameCompleted] = useState(() => false)
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set([]))
    const [tallyTotal, setTallyTotal] = useState(0)
    const [submitError, setSubmitError] = useState(false)
    const location = useLocation();
    useLayoutEffect(() => {
        fetcher(setQuizData)
    }, [startGame])
    const currentPage = location.pathname
    const selectAnswerChoice = (id, parentId) => {
        let alreadySelected = false // becomes true if one of the answer choices was already selected
        const quizDataClone = structuredClone(quizData)
        const question = quizDataClone.find(item => item.id === parentId)
        const newAnswers = question.answers.map(item => {
            if (item.id === id) {
                if (item.selected) {
                    alreadySelected = true
                }
                return { ...item, selected: true }
            }
            else {
                return { ...item, selected: false }
            }
        })
        question.answers = newAnswers
        setQuizData(quizDataClone)
        setAnsweredQuestions(prev => prev.add(parentId))
        if (!alreadySelected) {
            setSubmitError(false)
        }
    }
    const nav = (page) => {
        navigate(page)
    }
    const tally = () => {
        let total = 0
        for (let i of quizData) {
            for (let j of i.answers) {
                if (j.selected === true && j.correct === true) {
                    total++
                }
            }
        }
        setTallyTotal(total)
    }
    const submit = () => {
        if (answeredQuestions.size === quizData.length) {
            setGameCompleted(true)
            tally()
        }
        else {
            setSubmitError(true)

        }
    }

    const startNewGame = () => {
        setStartGame(prev => !prev)
        setGameCompleted(false)
        setTallyTotal(0)
        setAnsweredQuestions(new Set([]))


    }

    return (
        <QuizContext.Provider value={{
            nav, quizData, currentPage,
            selectAnswerChoice, gameCompleted, tallyTotal, submit, startNewGame, submitError, answeredQuestions
        }}>
            {children}
        </QuizContext.Provider>
    )

}
export { QuizContext, QuizContextProvider };
