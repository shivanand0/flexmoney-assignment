import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppContext from './Context/AppContext'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContext>
      <App />
    </AppContext>
    </BrowserRouter>
  </React.StrictMode>,
)
