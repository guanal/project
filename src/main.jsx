import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: false,
  mirror: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)