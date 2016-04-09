export const SET_STATE = 'SET_STATE'
export const CHOOSE_ANSWER = 'CHOOSE_ANSWER'

export function setState(newState) {
  return {
    type: SET_STATE,
    state: newState
  }
}

export function chooseAnswer({questionId, answer}) {
  return {
    type: CHOOSE_ANSWER,
    questionId,
    answer
  }
}
