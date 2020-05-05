import React from 'react'
import VehicleProvider from './Vehicles';

const StoreWrapper: React.FC = ({children}) => {
  return(
    <>
      <VehicleProvider>
        {children}
      </VehicleProvider>
    </>
  )
}
export default StoreWrapper;