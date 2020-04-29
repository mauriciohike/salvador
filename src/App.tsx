import React from 'react'
import 'antd/dist/antd.css'

// @ts-ignore
import Foundation from 'drmanhattan-foundation'

import VehicleProvider from './store/Vehicles'

import Routes from './routes'
import Menus from './menus'

function App() {
  return <Foundation routes={<Routes />} menus={<Menus />} provider={VehicleProvider} />
}

export default App
