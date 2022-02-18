import styled from 'styled-components/macro'
import Input from 'components/atoms/Input/Input'

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const InputContainer = styled.div`
  margin: 8px;
  margin: 0 auto;
`

export const StyledInput = styled(Input)`
  margin: auto;
`
