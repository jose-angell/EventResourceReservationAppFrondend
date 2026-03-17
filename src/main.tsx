import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BookitApp } from './BookitApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookitApp />
  </StrictMode>,
)
