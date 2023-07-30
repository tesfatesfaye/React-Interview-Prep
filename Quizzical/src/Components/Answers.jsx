import { decode } from 'html-entities';
import { useContext, useEffect } from 'react';
import { QuizContext } from '../Context/QuizContext';
import useQuestion from '../Hooks/useQuestion';
const Answers = (props) => {
    const { selectAnswerChoice } = useContext(QuizContext)
    const { style } = useQuestion(props.selected, props.correct)

    return (
        <div onClick={() => {
            selectAnswerChoice(props.id, props.parentId)
        }} className="answer-div"
            style={(style())}
        >
            {decode(props.val)}

        </div>


    )


}
export default Answers