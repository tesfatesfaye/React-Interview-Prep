import { decode } from 'html-entities';
import Answers from "./Answers";
const Questions = (props) => {
       const answerMapper =props.answers.map((data, index) => {
        return (
            <Answers
                key={data.id}
                {...data}
                index={index}
                parentId={props.id}
                style={(() => style(data.selected, data.correct))}
            />
        )

    })

    return (
        <>
            <h2 className="question-text">{decode(props.question)}</h2>
            <div className="answers">
                {answerMapper}
            </div>

        </>
    )

}

export default Questions