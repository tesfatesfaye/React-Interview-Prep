import { useContext} from "react";
import { QuizContext } from "../Context/QuizContext";
const useAnswers = (selected,correct) => {
    const { gameCompleted } = useContext(QuizContext)
    const style = () => {
            if (!gameCompleted &&selected) {
           return { background: "#D6DBF5" } 

        }
        else if(gameCompleted) {
            if (correct === true) {
                return { background: "#94D7A2" }
            }
            else if (selected === true) {
                return { background: "#F8BCBC" }
            }

        }
    }
    
    return { style }
}
export default useAnswers






