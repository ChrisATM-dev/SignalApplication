import React from 'react'

export const QuestionController = ({counter, increment, decrement, cantidadSenales}) => {
  return (
    <div className='question-bar'>
        <button className='buttom-controller' onClick={() => decrement()}>disminuir</button>
        <p className='question-bar-text'>{counter}/{cantidadSenales}</p>
        <button className='buttom-controller' onClick={() => increment()}>aumentar</button>
    </div>

    
  )
}
