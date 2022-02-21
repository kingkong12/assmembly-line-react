// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { Suspense } from 'react'
import {
  //Route,
  Switch,
} from 'react-router'

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>Routes</Switch>
    </Suspense>
  )
}
export default Routes
