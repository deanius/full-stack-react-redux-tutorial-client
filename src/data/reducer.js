import {fromJS, Map} from 'immutable'
import * as examples from '../../doc/example'
import * as actionTypes from '../actions/index'

function setState(state, newState) {
  return state.merge(newState)
}

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
    case actionTypes.SET_STATE: {
      return setState(state, action.state)
    }
    case actionTypes.CHOOSE_ANSWER: {
      return chooseAnswer(state, action)
    }
    default:
      return state
  }
}

// begin app development
// function questionsAnsweredCorrectlyByUser() {
//   let snap = serverSnapshot;
//   return snap.questionHistory.filter(q => q.correctPlayerId == snap.game.players[0].id)
// }

