import { nanoid } from 'nanoid'
import { useState } from 'react'
import './App.css'

import { useEffect } from 'react'
const modelSetter = (first, last, img) => ({ id: nanoid(), first: first, last: last, img: img })
const dataExtractor = (arr) => {
  let resultsArray = []
  let first, last, img
  for (let i of arr) {
    first = i.name.first
    last = i.name.last
    img = i.picture.medium
    resultsArray.push(modelSetter(first, last, img))
  }
  return resultsArray
}

const addZero = (val) => {
  return (val < 10 ? `0${val}` : val)
}
function App() {
  const [userData, setUserData] = useState([])
  const [add, setAdd] = useState(0)
  const [page, setPage] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [min,setMin]=useState(0)
  const [hur,setHur]=useState(0)
  useEffect(() => {


    const fetcher = async () => {
      const res = await fetch("https://randomuser.me/api?page=" + page)
      let data = await res.json()
      setUserData(prev => [...prev, ...dataExtractor(data.results)])
      setPage(page + 1)

    }
    fetcher()


  }, [add])

  useEffect(() => {
    const interval = setInterval(() => {
      const date=new Date()
      setHur(addZero(date.getHours()))
      setMin(addZero(date.getMinutes()))
       setSeconds(addZero(date.getSeconds()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  const mapper = userData.map((x) => {
    return (
      <div key={x.id}>
        <h2>{`First Name: ${x.first}`}</h2>
        <h2>{`Last Name: ${x.last}`}</h2>
        <img src={x.img}></img>
      </div>
    )
  })





  return (
    <div className="App">
      {/* <pre style={{ height: "90vh", display: "flex", flexDirection: "column", width: "100%", flexWrap: "wrap" }}>{mapper}</pre>
    <button style={{width:"100px"}}onClick={()=>setAdd(prev=>prev+1)}>Add person</button> */}
      <h1>{` ${hur} : ${min} : ${seconds}`}</h1>
    </div>
  )
}

export default App
