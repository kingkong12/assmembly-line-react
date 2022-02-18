import { createGlobalStyle } from 'styled-components/macro'

import BasierSquareRegularTTF from 'assets/fonts/basiersquare-regular.ttf'
import BasierSquareRegularWOFF from 'assets/fonts/basiersquare-regular.woff'

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
