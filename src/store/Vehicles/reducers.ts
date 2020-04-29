export const vehicleReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_VEHICLE':
      let { vehicles } = state
      const { vehicle } = action.payload

      vehicles = [vehicle, ...vehicles]

      return {
        ...state,
        vehicles,
      }
    default:
      return state
  }
}
