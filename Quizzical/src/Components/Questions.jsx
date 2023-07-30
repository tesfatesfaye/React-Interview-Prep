import Answers from "./Answers"
import { decode } from 'html-entities';
const Questions=(props)=>{
const answerMapper=((props.answers.map((data,index)=>{
    return(
        <Answers
            key={props.id}
            {...data}
            index={index}
            parentId={props.id}
        />
    )

})))

return(
    <>
    <h2 className="question-text">{decode(props.question)}</h2>
    {answerMapper}
    </>
)

}

export default Questions