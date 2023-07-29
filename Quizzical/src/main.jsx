import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QuizContextProvider } from './Context/QuizContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <QuizContextProvider >
            <App />
        </QuizContextProvider >

    </Router>


)
