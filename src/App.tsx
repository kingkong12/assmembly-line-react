// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import theme from './styles/theme'
import GlobalStyles from './styles/globalStyles'

function App(): JSX.Element {
  return (
    // Theme Provider acts a context api provided by styled component to drill theme into whole app
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Hello World
    </ThemeProvider>
  )
}

export default App
