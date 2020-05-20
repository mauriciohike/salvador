import React from 'react'

// @ts-ignore
import Foundation from 'drmanhattan-foundation'
import 'antd/dist/antd.css'

import Routes from './routes'
import menus from './menus';
import StoreWrapper from './store'


function App() {
  return (
    // <h1>Teste sem foundation</h1>
    <Foundation
      routes={Routes}
      menus={menus}
      store={StoreWrapper}
      layout="Horizontal"
    />
  )
}

export default App
