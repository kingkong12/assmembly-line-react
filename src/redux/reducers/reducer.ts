/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { auth } from './auth'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
  //ADD MORE REDUCERS HERE
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers = (state: any, action: any): any => {
  return rootReducer(state, action)
}

export { reducers, history }
