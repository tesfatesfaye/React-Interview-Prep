import { useContext } from "react";
import Button from "../Components/Button";
import Questions from "../Components/Questions";
import { QuizContext } from "../Context/QuizContext";
import { nanoid } from "nanoid";
const Quiz = () => {

    const { quizData, gameCompleted, tallyTotal, startNewGame, submit, submitError, answeredQuestions } = useContext(QuizContext)
    const questionMapper = (quizData.map((data, index) => {
        return (<Questions
            key={data.id}
            index={index}
            {...data}
        />)
    }))



    return (
        <>
            <div className="quiz-parent">
                {questionMapper}
            </div>
            <div className='button-parent'>
                <h3 className={submitError ? `score-text` : `not-displayed`} style={{ color: "#d0342c" }}>{`You have answered ${answeredQuestions.size} out of ${quizData.length} questions.
             Please answer all of the questions.`}</h3>
                <h3 className={gameCompleted ? `score-text` : `not-displayed`}>{`You scored ${tallyTotal}/${quizData.length}  correct answers`}</h3>
                <Button key={nanoid()} val={gameCompleted ? "Play again" : "Check answers"} fun={gameCompleted ? startNewGame : submit} />
            </div>

        </>
    )
}
export default Quiz;