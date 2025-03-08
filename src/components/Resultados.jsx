import '../styles/resultados.css'

import React, { useContext } from 'react'
import { SignalContext } from '../context/SignalContext'


/// crear funciones para mostrar los resultados
export const Resultados = () => {
  const {state} = useContext(SignalContext)

const filas = state.map( (pregunta, index)=> {
  const resSelect = pregunta.respuestas.find((respuesta)=>respuesta.isSelected);

  const esCorrecta =  resSelect?.res === pregunta.nombre;

  return(
    <tr key={index}>
      <td className='container-img'><img src={pregunta.image} alt={pregunta.id} /></td>
      <td>{resSelect?.res || 'Sin respuesta'}</td>
      <td>{pregunta.nombre}</td>
      <td className={`${esCorrecta? 'correcta': 'incorrecta'}`}>{esCorrecta ? 'True' : 'False'}</td>
    </tr>
  )
})

  return (
    <div className='tabla-container'>
      <h1>Resultados</h1>
      <table>
        <thead>
          <tr>
            <td>N°</td>
            <td>Tu respuesta</td>
            <td>Respuesta correcta</td>
            <td>Estado</td>
          </tr>
        </thead>
         <tbody>
            {
              filas
            }
          </tbody>
      </table>
      <div className='container-salir'>
        <button onClick={()=>console.log(state)}>Ver estado</button>
      </div>
    </div>
  )
}
