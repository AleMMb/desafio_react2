import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Detalles from './views/Detalles'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Pokemones' element={<Pokemones />} />
          <Route path='/Pokemones/:nombre' element={<Detalles />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App  