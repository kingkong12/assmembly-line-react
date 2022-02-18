import { Reducer } from 'redux'

const authReducer: Reducer<Record<string, unknown>> = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIONCREATOR':
      return {
        ...state,
      }
    default:
      return state
  }
}

export { authReducer as auth }
