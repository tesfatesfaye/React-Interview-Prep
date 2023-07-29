import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizContext";
const StartingPage = () => {
    const { nav } = useContext(QuizContext)
    return (
        <div className="starting-page">
            <h1 className="quiz-title">Quizzical</h1>
            <h2 className="quiz-subtitle ">Quiz game from a random game API</h2>
            <button className="star-game-button" onClick={() => nav('quiz')}>Start Game</button>

        </div>
    )

}

export default StartingPage