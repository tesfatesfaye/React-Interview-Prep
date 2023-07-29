import './App.css'
import StartingPage from './Pages/StartingPage'
import { Routes, Route } from 'react-router-dom';
import Quiz from './Pages/Quiz'

const App = () => {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<StartingPage />}/>
        <Route path='/quiz' element={<Quiz />}/>

       

    </Routes>


      <div className='blue-back{'></div>
      <div className='yellow-back'></div>

    </div>
  )
}

export default App
