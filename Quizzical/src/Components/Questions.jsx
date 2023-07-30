import Answers from "./Answers"
import { decode } from 'html-entities';
const Questions=(props)=>{
const answerMapper=((props.answers.map((data,index)=>{
    return(
        <Answers
            key={data.id}
            {...data}
            index={index}
            parentId={props.id}
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