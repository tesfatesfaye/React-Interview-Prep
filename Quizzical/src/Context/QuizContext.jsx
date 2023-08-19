import React, { createContext, useLayoutEffect, useState,useEffect } from "react";
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
    useEffect(() => {
        fetcher(setQuizData)

        return () => {
            console.log('new render')
        }
    }, [startGame])
    const currentPage = location.pathname
    const selectAnswerChoice = (id, parentId) => {
        let alreadySelected = quizData.find(x => x.id === parentId).answers.find(y => y.id === id).selected
            
        setQuizData((prev) => {
            return prev.map((item) => {
                return item.id !== parentId
                    ? { ...item }
                    : {
                        ...item,
                        answers: item.answers.map((answer) => {
                            return answer.id !== id
                                ? { ...answer, selected: false }
                                : { ...answer, selected: true };
                        }),
                    };
            });
        });
        setAnsweredQuestions((prev) => prev.add(parentId));
        if (!alreadySelected && submitError) {
            setSubmitError(false);
        }
    };

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
