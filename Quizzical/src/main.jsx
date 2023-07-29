import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import { quizContextProvider } from './Context/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <quizContextProvider>
            <App />
        </quizContextProvider>
       
    </Router>
   
  
)
