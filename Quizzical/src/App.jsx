import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { QuizContext } from './Context/QuizContext';
import Quiz from './Pages/Quiz';
import StartingPage from './Pages/StartingPage';

const App = () => {
  const { currentPage } = useContext(QuizContext)
  return (
    <div className="App" style={{ justifyContent: currentPage === "/" ? "center" : "" }}>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/quiz' element={<Quiz />} />


      </Routes>


      <div className='blue-back'></div>
      <div className='yellow-back'></div>

    </div>
  )
}

export default App
