import React, { FC, ChangeEvent } from 'react'

import { useAssemblyLineHook } from 'hooks/useAssemblyLineHook'
import { AssemblyLineTS } from 'smeui-interfaces/services'
import {
  Container,
  InputContainer,
  StyledInput,
  ColumnContainer,
  Column,
  Title,
  Card,
} from './Styles'

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  const [addnewString, changeAddnewstring, addToAssembly, state, onLeftClick, onRightClick] =
    useAssemblyLineHook(stages)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changeAddnewstring && changeAddnewstring(event.target.value)
  }

  const onInputFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (addnewString === '') return
    addToAssembly()
  }

  return (
    <Container>
      <InputContainer>
        <form onSubmit={onInputFormSubmit} className="input-submit">
          <StyledInput className="add-element" value={addnewString} onChange={onChange} />
        </form>
      </InputContainer>
      <ColumnContainer>
        {stages.map((columnsTitle, index) => {
          return (
            <Column className={'assembly-column'} key={`${columnsTitle}-${index}`}>
              {/* Renders the title of the vertical column  */}
              <Title className={'column-title'}>{columnsTitle}</Title>
              {state[`${columnsTitle}`]?.map((element, elementIndex) => {
                //   Renders the card inside vertical column
                return (
                  <Card
                    key={`${element}-${elementIndex}-${index}`}
                    onClick={(): void => onLeftClick(columnsTitle, index, element)}
                    onContextMenu={(): void => onRightClick(columnsTitle, index, element)}
                  >
                    {element}
                  </Card>
                )
              })}
            </Column>
          )
        })}
      </ColumnContainer>
    </Container>
  )
}

export default React.memo(AssemblyLine)
