import React, { FC } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'
import { useAssemblyLineHook } from 'hooks/useAssemblyLineHook'
import { Container } from './Styles'
interface AssemblyLineTS {
  stages: AssemblyLineStagesTS
}

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  const [addnewString, changeAddnewstring] = useAssemblyLineHook(stages)
  useAssemblyLineHook(stages)

  return <Container>Assembly line</Container>
}

export default AssemblyLine
