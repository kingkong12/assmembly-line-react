/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { reducers, history } from '../reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistConfig } from 'constants/persistConfig'
import { apiRoutes } from 'constants/apiRoutes'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const storeConfig = () => {
  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk.withExtraArgument(apiRoutes)
        // ... other Middleware ...
      )
    )
  )

  const persistor = persistStore(store)
  return { store, persistor }
}

export { storeConfig, history }
