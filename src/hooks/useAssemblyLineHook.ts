/* eslint-disable no-prototype-builtins */
import { useState, useEffect, Dispatch, SetStateAction, useMemo } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

interface StateWithIdsTS {
  [a: string]: Array<string>
}

type useAssemblyLineHookReturn = [string, Dispatch<SetStateAction<string>>, () => void]

export const useAssemblyLineHook = (stages: AssemblyLineStagesTS): useAssemblyLineHookReturn => {
  const [state, setState] = useState<StateWithIdsTS>({})
  const [addnewString, changeAddnewstring] = useState<string>('')

  const { getFirstColumdId, getLastColumnId } = useMemo(() => {
    return {
      getFirstColumdId: stages[0] || '',
      getLastColumnId: stages[stages.length - 1] || '',
    }
  }, [stages])

  // Once the props are initialize,  we define the local state of the app and render tables
  useEffect(() => {
    const convertedStagesToState = stages.reduce((ac, a) => ({ ...ac, [a]: [] }), {})
    setState(convertedStagesToState)
  }, [stages])

  const addToAssembly = (): void => {
    setState((previousState) => {
      return {
        ...previousState,
        [getFirstColumdId]: [addnewString, ...previousState[getFirstColumdId]],
      }
    })
    changeAddnewstring('')
  }

  return [addnewString, changeAddnewstring, addToAssembly]
}
