import React, { FC, ChangeEvent } from 'react'

import { useAssemblyLineHook } from 'hooks/useAssemblyLineHook'
import { AssemblyLineTS } from 'smeui-interfaces/services'
import { Container, InputContainer, StyledInput, ColumnContainer, Column, Card } from './Styles'
import { H3 } from 'components/atoms/Typography/Typography'

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  const [addnewString, changeAddnewstring, addToAssembly, state, onLeftClick, onRightClick] =
    useAssemblyLineHook(stages)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void =>
    changeAddnewstring(event.target.value)

  const onInputFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // Prevent entering values which are blank or empty
    if (!/\S/.test(addnewString)) return
    addToAssembly()
  }

  return (
    <Container>
      <InputContainer>
        <form onSubmit={onInputFormSubmit} className="input-submit">
          <StyledInput
            placeHolder="Add an Item"
            className="add-element"
            value={addnewString}
            onChange={onChange}
          />
        </form>
      </InputContainer>
      <ColumnContainer>
        {stages.map((columnsTitle, index) => {
          return (
            <Column className={'assembly-column'} key={`${columnsTitle}-${index}`}>
              {/* Renders the title of the vertical column  */}
              <H3 toUpperCase className={'column-title'}>
                {columnsTitle}
              </H3>
              {/* Renders the card inside vertical column*/}
              {state[`${columnsTitle}`]?.map((element, elementIndex) => {
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
