import styled, { css } from 'styled-components/macro'
import Input from 'components/atoms/Input/Input'
import { pxToRem } from 'helpers/pxToRem'

import { BoxShadowTS } from 'smeui-interface/pages'
import { wallpaperUrl } from 'constants/wallpaperList'

const WallpaperCss = css`
  background-image: url(${wallpaperUrl[Math.floor(Math.random() * wallpaperUrl.length)]});
  background-position: 'center';
  background-repeat: 'no-repeat';
  background-size: cover;
`

const BoxShadow = css<BoxShadowTS>`
  ${({ r = 0, g = 0, b = 0, opacity = 0.35 }): string =>
    `box-shadow: rgba(${r}, ${g}, ${b}, ${opacity}) 0px 5px 15px;;`}
`

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  ${WallpaperCss}
`

export const InputContainer = styled.div`
  margin: 16px auto;
`

export const StyledInput = styled(Input)`
  margin: auto;
`
export const ColumnContainer = styled.div`
  display: flex;
  margin: 16px;
  overflow-y: scroll;
  flex-grow: 1;

  justify-content: space-evenly;
`

export const Column = styled.article`
  width: 200px;
  text-align: center;
  height: fit-content;
  min-height: 10px;
  margin: 0 8px;
  border-radius: ${pxToRem(4)};

  border: ${pxToRem(1)}; dotted ${({ theme }): string => theme?.staticColors?.black ?? '#000000'};
  background-color: ${({ theme }): string => theme?.staticColors?.lightSlateGrey ?? '#E3E4E6'};
`

export const Card = styled.div`
  margin: 8px 4px;
  padding: 4px;
  border-radius: ${pxToRem(4)};

  cursor: pointer;
  background-color: ${({ theme }): string => theme?.staticColors?.white ?? '#FFFFFF'};

  &:hover {
    ${BoxShadow}
  }
`
