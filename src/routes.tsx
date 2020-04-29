import React from 'react'
import { Route } from 'react-router-dom'

// @ts-ignore
import { WrapperRouter } from 'drmanhattan-foundation'

import ExamplePage from './pages/ExamplePage'
import DashboardPage from './pages/DashboardPage'

function Routes() {
  return (
    <WrapperRouter>
      <Route exact path="/" component={ExamplePage} />
      <Route exact path="/dashboard" component={DashboardPage} />
    </WrapperRouter>
  )
}

export default Routes
