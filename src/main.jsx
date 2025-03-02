import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// custom external css
import '../src/assets/styles/bootstrap.css'
import '../src/assets/styles/style.css'
import '../src/assets/styles/responsive.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
