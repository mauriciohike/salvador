import React, { createContext, useReducer } from 'react'
import { vehicleReducer } from './reducers'

let initialArg: any = {
  vehicles: [],
}

const VehiclesContext = createContext(initialArg)

const VehiclesProvider = (props: any) => {
  const [vehicleState, dispatch] = useReducer(vehicleReducer, initialArg)

  return <VehiclesContext.Provider value={{ vehicleState, dispatch }}>{props.children}</VehiclesContext.Provider>
}

export default VehiclesProvider
export { VehiclesContext }
