import { decode } from 'html-entities';
const Answers = (props) => {


    return (
        <div className="answer-div">
            {decode(props.val)}

        </div>


    )


}
export default Answers