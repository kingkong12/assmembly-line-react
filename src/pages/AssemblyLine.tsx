import React, { FC, ChangeEvent } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'
import { useAssemblyLineHook } from 'hooks/useAssemblyLineHook'
import { Container, InputContainer, StyledInput } from './Styles'
interface AssemblyLineTS {
  stages: AssemblyLineStagesTS
}

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  const [addnewString, changeAddnewstring, addToAssembly] = useAssemblyLineHook(stages)
  useAssemblyLineHook(stages)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // event.stopPropagation()
    changeAddnewstring && changeAddnewstring(event.target.value)
  }

  const onInputFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (addnewString === '') return
    addToAssembly()
  }

  console.log('addnewString', addnewString)
  return (
    <Container>
      <InputContainer>
        <form onSubmit={onInputFormSubmit} className="input-submit">
          <StyledInput value={addnewString} onChange={onChange} />
        </form>
      </InputContainer>
    </Container>
  )
}

export default AssemblyLine
