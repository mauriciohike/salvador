interface IParams {
  type: string
  payload: {
    vehicle: IVehicle
  }
}

interface IVehicle {
  name: string
}

type getProps = (param: IParams) => void

function setVehicle(dispatch: getProps, vehicle: IVehicle) {
  dispatch({
    type: 'SET_VEHICLE',
    payload: {
      vehicle: vehicle,
    },
  })
}

export { setVehicle }
