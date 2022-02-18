/* eslint-disable no-prototype-builtins */
import { useState, useMemo, useEffect, Dispatch, SetStateAction } from 'react'
import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

/*
****** useAssemblyLineHookReturn ****
Hook is responsible to add and navigate cards to appropriate direction in swim lane as well as maintainin state of application state
* @para1 :  it requires stages a  prop to initialize state if applicatoin
*/
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

  // this state is used to captured input value entered by the user
  const [addnewString, changeAddnewstring] = useState('')

  // This function could be prevented , however wrapping it inside useMemo will prevent initializing of getFirstColumdId and getLastColumdId
  const { getFirstColumdId, getLastColumnId } = useMemo(() => {
    return {
      getFirstColumdId: stages[0] || '',
      getLastColumnId: stages[stages.length - 1] || '',
    }
  }, [stages])

  // Initialize state based on stages
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

    // moves card to the right colum
    const getNextColumnId = stages[columnsTitlendex + 1]
    // TODO: as a part of optimization, onLeftClick and onRightClick function can be consolidate into one
    setState({
      ...state,
      ...(isLastColum ? {} : { [getNextColumnId]: [element, ...state[`${getNextColumnId}`]] }),
      [columnsTitle]: stateArrayCopy,
    })
  }

  const onRightClick = (columnsTitle: string, columnsTitlendex: number, element: string): void => {
    const stateArrayCopy = state[`${columnsTitle}`].slice().filter((item) => item !== element)
    const isFirstColum = columnsTitle === getFirstColumdId

    // moves card to the left colum
    const getNextColumnId = stages[columnsTitlendex - 1]

    setState({
      ...state,
      ...(isFirstColum ? {} : { [getNextColumnId]: [...state[`${getNextColumnId}`], element] }),
      [columnsTitle]: stateArrayCopy,
    })
  }

  return [addnewString, changeAddnewstring, addToAssembly, state, onLeftClick, onRightClick]
}
