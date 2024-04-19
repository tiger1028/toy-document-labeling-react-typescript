import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { DocumentContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocumentContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DocumentContextProvider>
  </React.StrictMode>,
)
