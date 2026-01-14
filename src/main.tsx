import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Accueil from './components/home.tsx'
import Album from './components/albumSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Accueil />
    <Album />
  </StrictMode>,
)
