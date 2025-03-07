import React from 'react'

export const QuestionController = ({counter, increment, decrement, cantidadSenales}) => {
  return (
    <div className='question-bar'>
        <button onClick={() => decrement()}>disminuir</button>
        <p className='question-bar-text'>{counter}/{cantidadSenales}</p>
        <button onClick={() => increment()}>aumentar</button>
    </div>

    
  )
}
