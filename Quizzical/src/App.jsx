import './App.css'
import StartingPage from './Pages/StartingPage'
import { Routes, Route } from 'react-router-dom';
import Quiz from './Pages/Quiz'
import { useContext } from 'react';
import { QuizContext } from './Context/QuizContext';

const App = () => {
  const {currentPage}=useContext(QuizContext)
  return (
    <div className="App" style={{justifyContent: currentPage==="/" ? "center" : ""}}>
    <Routes>
      <Route path='/' element={<StartingPage />}/>
        <Route path='/quiz' element={<Quiz />}/>

       
    </Routes>


      <div className='blue-back'></div>
      <div className='yellow-back'></div>

    </div>
  )
}

export default App
