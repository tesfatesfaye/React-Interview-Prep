
const Button=({val,fun})=>{

    return(
        <button className="button" onClick={() => fun('quiz')}>{val}</button>
    )

}
export default Button