import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizContext";
import Button from "../Components/Button";
import { nanoid } from "nanoid";
const StartingPage = () => {
    const { nav } = useContext(QuizContext)
        return (
        <div className="starting-page">
            <h1 className="quiz-title">Quizzical</h1>
            <h2 className="quiz-subtitle ">Quiz game from a random game API</h2>
                <Button key={nanoid()} val="Start Quiz" fun={nav} class="button"/>

        </div>
    )

}

export default StartingPage