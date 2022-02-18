import { ActionCreator, Dispatch } from 'redux'

export const actionCreator: ActionCreator<void> = () => {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: 'ACTIONCREATOR',
    })
  }
}
