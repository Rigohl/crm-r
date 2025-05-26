import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>CRM Fase 1</h1>
    <button onClick={() => window.location.href = '/personal'}>Chat Personal</button>
    <button onClick={() => window.location.href = '/crm'}>CRM</button>
  </div>
)

const Personal = () => <h2>Chat Personal</h2>
const CRM = () => <h2>CRM</h2>

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/crm" element={<CRM />} />
    </Routes>
  </BrowserRouter>
)

export default App