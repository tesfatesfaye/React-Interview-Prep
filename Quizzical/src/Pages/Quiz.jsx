import { useContext } from "react";
import Button from "../Components/Button";
import Questions from "../Components/Questions";
import { QuizContext } from "../Context/QuizContext";
const Quiz = () => {

    const { quizData } = useContext(QuizContext)
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
        <Button val="Submit Answers"/>
        </>
    )
}
export default Quiz;