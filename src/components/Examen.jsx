// Hooks
import React, { useContext } from 'react'
import { useCounter } from '../hooks/useCounter';

// Components
import { QuestionController } from './questionController';
import { SignalQuestion } from './SignalQuestion';
import { NavLink } from 'react-router-dom';
import { SignalContext } from '../context/SignalContext';

export const Examen = () => {
    const {state, dispatch, cantidadSenales} = useContext(SignalContext)
    const {counter, increment, decrement, setSpecificValue} = useCounter(cantidadSenales)

    const handleSelectRespuesta = (idSignal, idRes) => {
      dispatch({
        type: 'setSelect',
        payload: {idSignal, idRes}
      })
    }

  return (
    <div className='container-app'>
      <QuestionController 
        counter={counter} 
        increment={increment} 
        decrement={decrement} 
        setSpecificValue={setSpecificValue}
        cantidadSenales={cantidadSenales}
      />

      <SignalQuestion counter={counter} signal={state[counter-1]} handleSelectRespuesta={handleSelectRespuesta}/>

      {
        counter === cantidadSenales && (
          <NavLink to="resultados" className="btn-resultados">
            Ver Resultados
          </NavLink>
        )
      }
    </div>
  )
}
