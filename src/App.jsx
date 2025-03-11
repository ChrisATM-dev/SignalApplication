import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// Examen
import { ExamenLayout } from './layouts/ExamenLayout';
import { Examen, Resultados } from './components/exam';

// Home
import { Home } from './components/home';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
