import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import { Examen } from './components/Examen'
import { Resultados } from './components/Resultados'
import { Home } from './components/Home'

function App() {
  return (
    <>
      <Router>
        <div className='container-nav'>
          <NavLink to = '/'>Home</NavLink>
          <NavLink to = '/examen'>Examen</NavLink>
          <NavLink to = '/resultados'>Resultados</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/examen" element={<Examen/>}/>
          <Route path="/resultados" element={<Resultados/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
