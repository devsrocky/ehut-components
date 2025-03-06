import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// custom external css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.css'
import '../src/assets/styles/responsive.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
