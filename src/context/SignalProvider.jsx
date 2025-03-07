import React, { useReducer } from 'react'
import { SignalContext } from './SignalContext'
import { signalReducer } from './signalReducer'
import { getSignalsList } from '../functions/getSignalsList'

const cantidadSenales = 15;
const cantidadData = 50;
export const SignalProvider = ({children}) => {
    const [state, dispatch] = useReducer(signalReducer, [], ()=>getSignalsList(cantidadSenales, cantidadData))
    return(
        <SignalContext.Provider value={{
            state,
            dispatch,
            cantidadSenales
        }}>
            {children}
        </SignalContext.Provider>
    )
}
