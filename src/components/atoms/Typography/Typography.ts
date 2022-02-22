import { pxToRem } from 'helpers/pxToRem'
import styled, { css } from 'styled-components/macro'

import { TypographyTS } from 'smeui-interfaces/components/atoms'

export const TransformUpperCase = css`
  text-transform: uppercase;
`

export const H3 = styled.h3<TypographyTS>`
  font-size: ${pxToRem(16)};
  margin-top: 8px 8px;

  ${({ toUpperCase }): string => {
    if (toUpperCase) return `${TransformUpperCase}`
    else return ``
  }}
`
