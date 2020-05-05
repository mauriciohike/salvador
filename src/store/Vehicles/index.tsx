import React, { createContext, useReducer } from 'react'
import { vehicleReducer } from './reducers'

let initialArg: any = {
  vehicles: [],
}

const VehiclesContext = createContext(initialArg)

const VehiclesProvider: React.FC = ({children}) => {
  const [vehicleState, dispatch] = useReducer(vehicleReducer, initialArg)

  return <VehiclesContext.Provider value={{ vehicleState, dispatch }}>{children}</VehiclesContext.Provider>
}

export default VehiclesProvider
export { VehiclesContext }
