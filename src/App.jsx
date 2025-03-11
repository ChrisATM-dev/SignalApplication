import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import { Examen } from './components/Examen'
import { Resultados } from './components/Resultados'
import { Home } from './components/Home'
import { ExamenLayout } from './layouts/ExamenLayout'

function App() {
  return (
    <Router>
      <div className='container-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/examen'>Examen</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/examen/*" element={<ExamenLayout/>}>
          <Route index element={<Examen/>}/>
          <Route path="resultados" element={<Resultados/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
