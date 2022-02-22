import styled from 'styled-components/macro'
import { TransformUpperCase } from '../Typography/Typography'
import { pxToRem } from 'helpers/pxToRem'

export const BaseInput = styled.input`
  padding: 8px 8px;
  border: ${pxToRem(1)} solid ${({ theme }): string => theme?.staticColors?.black ?? '#000000'};
  border-radius: ${pxToRem(4)};
  box-sizing: border-box;
  min-width: 300px;

  &::placeholder {
    ${TransformUpperCase}
  }
`
