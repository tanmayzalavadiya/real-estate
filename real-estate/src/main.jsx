import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Login.jsx'
import Lead from './Lead/Lead.jsx'
import LeadForm from './Lead/LeadForm.jsx'
import LeadGrid from './Lead/LeadGrid.jsx'
import Contact from './Contact/Contact.jsx'
import ContactForm from './Contact/ContactForm.jsx'
import ContactGrid from './Contact/ContactGrid.jsx'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
