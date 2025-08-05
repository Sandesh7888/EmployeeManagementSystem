import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TextContext from './context/TextContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <TextContext> 
      <AuthContext>
        <App/>
      </AuthContext>
    </TextContext>

  </StrictMode>,
)
