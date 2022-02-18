import styled from 'styled-components/macro'

export const BaseInput = styled.input`
  padding: 8px 8px;
  border: 1px solid ${({ theme }): string => theme?.staticColors?.black ?? '#000000'};
  border-radius: 4px;
  box-sizing: border-box;
  width: 300px;
`
