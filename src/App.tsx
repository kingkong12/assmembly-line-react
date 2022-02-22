// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components/macro'
import theme from './styles/theme'
import GlobalStyles from './styles/globalStyles'

import AssemblyLine from 'pages/AssemblyLine'
import { stages } from 'constants/assemblyLineStages'

function App(): JSX.Element {
  return (
    // Theme Provider acts a context api provided by styled component to drill theme into whole app
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
        <AssemblyLine stages={stages} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
