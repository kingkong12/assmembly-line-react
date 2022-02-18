/* eslint-disable no-prototype-builtins */
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

interface StateWithIdsTS {
  [a: string]: Array<string>
}

type useAssemblyLineHookReturn = [string, Dispatch<SetStateAction<string>>]

export const useAssemblyLineHook = (stages: AssemblyLineStagesTS): useAssemblyLineHookReturn => {
  const [state, setState] = useState<StateWithIdsTS>({})
  const [addnewString, changeAddnewstring] = useState<string>('')

  // Once the props are initialize,  we define the local state of the app and render tables
  useEffect(() => {
    const convertedStagesToState = stages.reduce((ac, a) => ({ ...ac, [a]: [] }), {})
    setState(convertedStagesToState)
  }, [stages])

  return [addnewString, changeAddnewstring]
}
