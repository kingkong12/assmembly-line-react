import { createGlobalStyle } from 'styled-components/macro'

import BasierSquareRegularTTF from 'assets/fonts/basiersquare-regular.ttf'
import BasierSquareRegularWOFF from 'assets/fonts/basiersquare-regular.woff'
import { pxToRem } from 'helpers/pxToRem'

const globalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Basier-Square';
    src: local('Basier-Square'), local('BasierSquare'),
    url(${BasierSquareRegularTTF}) format('ttf'),
    url(${BasierSquareRegularWOFF}) format('woff');
    font-style: normal;
    font-weight: normal;
}

* {
  box-sizing: border-box;
  font-family: Basier-Square;
}


body {
 margin: 0px;
 padding:0px;
 min-width: 900px;
 overflow-y:scroll;
 font-size:${({ theme }): string => pxToRem(theme.fontSize.root)};
 color: ${({ theme }): string => theme?.staticColors?.black ?? '#000000'};;
}

 #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-height: 100vh;

  }

`

export default globalStyles
