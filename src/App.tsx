import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NossaEscola from './pages/NossaEscola'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-escola" element={<NossaEscola />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Layout>
  )
}

export default App