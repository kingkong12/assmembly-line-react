// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components/macro'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './styles/theme'
import { storeConfig, history } from './redux/store/store'
import GlobalStyles from './styles/globalStyles'
import Routes from './routes/routes'

const { store, persistor } = storeConfig()

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={<div>Loading ...</div>} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
