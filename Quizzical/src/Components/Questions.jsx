import Answers from "./Answers"
import { decode } from 'html-entities';
import useQuestion from "../Hooks/useQuestion";
const Questions=(props)=>{
    const { style } = useQuestion()
const answerMapper=((props.answers.map((data,index)=>{
    return(
        <Answers
            key={data.id}
            {...data}
            index={index}
            parentId={props.id}
            style={(() => style(data.selected, data.correct))}
        />
    )

})))

return(
    <>
    <h2 className="question-text">{decode(props.question)}</h2>
        <div className="answers">
            {answerMapper}
        </div>
  
    </>
)

}

export default Questions