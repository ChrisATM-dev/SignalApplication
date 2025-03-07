import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SignalProvider } from './context/SignalProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SignalProvider>
    <App />
  </SignalProvider>
  // </StrictMode>,
)
