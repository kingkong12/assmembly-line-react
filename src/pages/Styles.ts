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
export const ColumnContainer = styled.div`
  display: flex;
  margin: 16px;
  overflow-y: scroll;
  flex-grow: 1;
  justify-content: space-evenly;
`

export const Column = styled.article`
  border: 1px dotted ${({ theme }): string => theme?.staticColors?.black ?? '#000000'};
  border-radius: 4px;
  min-width: 200px;
  text-align: center;
  margin: 0 8px;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px 8px;
  text-transform: uppercase;
`

export const Card = styled.div`
  border: 1px solid;
  margin: 4px;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
`
