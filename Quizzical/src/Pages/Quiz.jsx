import { QuizContext } from "../Context/QuizContext";
import { useContext } from "react";
import Questions from "../Components/Questions";
const Quiz=()=>{

const {quizData}=useContext(QuizContext)
    const questionMapper=(quizData.map((data,index)=>{
        return (<Questions
            key={data.id}
            index={index}
            {...data}
        />)
    }))
    


    return(
        <div className="quiz-parent">
            
        {questionMapper}
            
        </div>
    )
}
export default Quiz;