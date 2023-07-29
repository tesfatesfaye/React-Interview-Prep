
const Button=({val,fun})=>{

    return(
        <button className="star-game-button" onClick={() => fun('quiz')}>{val}</button>
    )

}
export default Button