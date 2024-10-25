import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OpenProvider } from './context/ContextOpen.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OpenProvider>
    <App />
    </OpenProvider>
  </StrictMode>,
)
