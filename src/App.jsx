import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TestimoniosPage from './pages/TestimoniosPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonios" element={<TestimoniosPage />} />
    </Routes>
  )
}

export default App