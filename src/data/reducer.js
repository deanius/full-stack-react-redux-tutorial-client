import {fromJS} from 'immutable'
import * as examples from '../../doc/example'
import * as actionTypes from '../actions/index'

function setState(state, newState) {
  return state.merge(newState)
}

export default function(state = fromJS(examples.serverInitial), action) {
  switch (action.type) {
    case actionTypes.SET_STATE: {
      return setState(state, action.state)
    }
    default:
      return state
  }
}
