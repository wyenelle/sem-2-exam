import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {HelmetProvider} from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <BrowserRouter>
     <App />
     </BrowserRouter>
     </HelmetProvider>
)