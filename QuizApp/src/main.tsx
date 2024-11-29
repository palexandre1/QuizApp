//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router'
import './index.css'
import App from './App.tsx'
import Select from './pages/Select.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />} />
     <Route path="quizzes" element={<Select />}/>
    </Routes>
  </BrowserRouter>,
)
