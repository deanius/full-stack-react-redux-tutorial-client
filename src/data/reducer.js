import * as examples from '../../doc/examples'
import * as actionTypes from '../actions/index'

function chooseAnswer(state, {playerId, questionId, answer}) {
  return state
}

export default function(state, action) {
  switch (action.type) {
    case actionTypes.CHOOSE_ANSWER: {
      return chooseAnswer(state, action)
    }
    default:
      return state
  }
}
