import { useContext } from "react";
import Button from "../Components/Button";
import Questions from "../Components/Questions";
import { QuizContext } from "../Context/QuizContext";
const Quiz = () => {

    const { quizData, gameCompleted, tallyTotal, startNewGame ,submit} = useContext(QuizContext)
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
                <h3 className={gameCompleted ? `score-text` : `not-displayed`}>{`You scored ${tallyTotal}/${quizData.length}  correct answers`}</h3>
                <Button val={gameCompleted ? "Play again": "Check answers"} fun={gameCompleted ? startNewGame : submit } />
            </div>
            
        </>
    )
}
export default Quiz;