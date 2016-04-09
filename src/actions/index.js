export const SET_STATE = 'SET_STATE'

export function setState(newState) {
  return {
    type: SET_STATE,
    state: newState
  }
}
