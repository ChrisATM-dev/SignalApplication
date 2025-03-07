// Hooks
import React, { useReducer } from 'react'
import { useCounter } from '../hooks/useCounter';

// Reducers
import { signalReducer } from '../functions/signalReducer';

// Components
import { QuestionController } from './questionController';
import { getSignalsList } from '../functions/getSignalsList';
import { SignalQuestion } from './SignalQuestion';
import { NavLink } from 'react-router-dom';

const cantidadSenales = 10;
const cantidadData = 50;
export const Examen = () => {
    const [state, dispatch] = useReducer(signalReducer, [], ()=>getSignalsList(cantidadSenales, cantidadData))
    const {counter, increment, decrement} = useCounter(cantidadSenales)

    const handleSelectRespuesta = (idSignal, idRes) => {
      dispatch({
        type: 'setSelect',
        payload: {idSignal, idRes}
      })
    }

    // console.log(state)

  return (
    <>
      <QuestionController counter={counter} increment={increment} decrement={decrement} cantidadSenales={cantidadSenales}/>

      <SignalQuestion counter={counter} signal={state[counter-1]} handleSelectRespuesta={handleSelectRespuesta}/>

      {
        counter === 10 && <NavLink to = '/resultados'>Resultados</NavLink>
      }
    </>
  )
}
