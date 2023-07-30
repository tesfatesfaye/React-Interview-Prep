import Answers from "./Answers"

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
    
    {answerMapper}
    </>
)

}

export default Questions