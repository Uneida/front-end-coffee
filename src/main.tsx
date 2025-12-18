import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Methods from './pages/Methods.tsx'
import Coffee from './pages/Coffee.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
