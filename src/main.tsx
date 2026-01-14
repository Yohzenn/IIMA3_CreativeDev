import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Accueil from './components/acceuil.tsx'
import Album from './components/sectionAlbum.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Accueil />
    <Album />
  </StrictMode>,
)
