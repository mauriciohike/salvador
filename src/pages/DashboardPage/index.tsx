import React, { useContext } from 'react'

import { VehiclesContext } from '../../store/Vehicles'

const DashboardPage: React.FC = () => {
  const { vehicleState } = useContext(VehiclesContext)

  const { vehicles } = vehicleState

  return (
    <>
      <h1>Dashboard do Example Project</h1>

      <p>
        Estado global da minha aplicação:
        {vehicles?.map((vehicle: any, index: number) => (
          <h2 key={index}> {vehicle.name} </h2>
        ))}
      </p>
    </>
  )
}

export default DashboardPage
