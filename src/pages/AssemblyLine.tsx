import React, { FC, useEffect, useState } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

interface AssemblyLineTS {
  stages: AssemblyLineStagesTS
}

interface StateWithIdsTS {
  [a: string]: Array<string>
}

const AssemblyLine: FC<AssemblyLineTS> = ({ stages }) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [state, setState] = useState<StateWithIdsTS | {}>({})

  useEffect(() => {
    const convertedStagesToState = stages.reduce((ac, a) => ({ ...ac, [a]: [] }), {})
    setState(convertedStagesToState)
  }, [stages])

  console.log('state', state)
  return <div>Assembly line</div>
}

export default AssemblyLine
