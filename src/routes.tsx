import React from 'react'
import { Route } from 'react-router-dom'

// @ts-ignore
import { WrapperRouter } from 'drmanhattan-foundation'

import ExamplePage from './pages/ExamplePage'
import DashboardPage from './pages/DashboardPage'
import Financeiro from './pages/Financeiro'

function Routes() {
  return (
    <WrapperRouter>
      <Route exact path="/" component={ExamplePage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/financeiro" component={Financeiro} />

    </WrapperRouter>
  )
}

export default Routes
