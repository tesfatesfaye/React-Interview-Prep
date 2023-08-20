import { useState } from "react"


const Count=({val})=>{
    const [count, setCount]=useState(0)

return(
    <>
        <h1>
            {val}
        {count}
    </h1>
        <button onClick={() => setCount(count + 1)}> button </button>
    </>
)


}
export default Count