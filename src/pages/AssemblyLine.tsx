import React, { FC } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

interface AssemblyLineTS {
  stages: AssemblyLineStagesTS
}

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  return <div>Assembly line</div>
}

export default AssemblyLine
