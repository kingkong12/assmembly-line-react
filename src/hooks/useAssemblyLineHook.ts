/* eslint-disable no-prototype-builtins */
import { useState, useMemo, useEffect, Dispatch, SetStateAction } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

type useAssemblyLineHookReturn = [
  string,
  Dispatch<SetStateAction<string>>,
  () => void,
  StateWithIdsTS,
  (columnsTitle: string, columnsTitlendex: number, element: string) => void,
  (columnsTitle: string, columnsTitlendex: number, element: string) => void
]

interface StateWithIdsTS {
  [a: string]: Array<string>
}

export const useAssemblyLineHook = (stages: AssemblyLineStagesTS): useAssemblyLineHookReturn => {
  // centralized state of the app.
  const [state, setState] = useState<StateWithIdsTS>({})

  const [addnewString, changeAddnewstring] = useState('')

  const { getFirstColumdId, getLastColumnId } = useMemo(() => {
    return {
      getFirstColumdId: stages[0] || '',
      getLastColumnId: stages[stages.length - 1] || '',
    }
  }, [stages])

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

  const onLeftClick = (columnsTitle: string, columnsTitlendex: number, element: string): void => {
    const stateArrayCopy = state[`${columnsTitle}`].slice().filter((item) => item !== element)
    const isLastColum = columnsTitle === getLastColumnId

    const getNextColumnId = stages[columnsTitlendex + 1]

    setState({
      ...state,
      ...(isLastColum ? {} : { [getNextColumnId]: [element, ...state[`${getNextColumnId}`]] }),
      [columnsTitle]: stateArrayCopy,
    })
  }

  const onRightClick = (columnsTitle: string, columnsTitlendex: number, element: string): void => {
    const stateArrayCopy = state[`${columnsTitle}`].slice().filter((item) => item !== element)
    const isFirstColum = columnsTitle === getFirstColumdId

    const getNextColumnId = stages[columnsTitlendex - 1]

    setState({
      ...state,
      ...(isFirstColum ? {} : { [getNextColumnId]: [...state[`${getNextColumnId}`], element] }),
      [columnsTitle]: stateArrayCopy,
    })
  }

  return [addnewString, changeAddnewstring, addToAssembly, state, onLeftClick, onRightClick]
}
