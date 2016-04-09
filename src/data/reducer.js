import {fromJS, Map} from 'immutable'
import * as examples from '../../doc/example'
import * as actionTypes from '../actions/index'

function chooseAnswer(state, {playerId, questionId, answer}) {
  return state
    .updateIn(['round', 'pendingAnswers'], answers =>
      answers.push(new Map({
        playerId,
        questionId,
        answer
      })))
}

export default function(state = fromJS(examples.serverInitial), action) {
  switch (action.type) {
    case actionTypes.CHOOSE_ANSWER: {
      return chooseAnswer(state, action)
    }
    default:
      return state
  }
}
