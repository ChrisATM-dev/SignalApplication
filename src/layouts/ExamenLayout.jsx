import { Outlet } from 'react-router-dom'
import { SignalProvider } from '../context/SignalProvider'

export const ExamenLayout = () => {
  return (
    <div className="examen-layout">
      <SignalProvider>
        <Outlet />
      </SignalProvider>
    </div>
  )
}
