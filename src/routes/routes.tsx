// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'

import { Hit } from 'pages/Hit/Hit'
import { Miss } from 'pages/Miss/Miss'

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/hit">
          <Hit />
        </Route>
        <Route exact path="/miss">
          <Miss />
        </Route>
        {/* Private Routes */}
      </Switch>
    </Suspense>
  )
}
export default Routes
