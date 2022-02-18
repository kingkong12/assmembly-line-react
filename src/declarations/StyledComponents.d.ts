import 'styled-components/macro'
import theme from 'styles/theme'

declare module 'styled-components/macro' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}
