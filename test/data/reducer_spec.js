import {fromJS} from 'immutable'

import reducer from '../../src/data/reducer'
import * as examples from '../../doc/example'
import * as actions from '../../src/actions/index'

describe('data/reducer', () => {
  it('is initialized with an empty game', () => {
    const nextState = reducer(undefined, {})

    expect(nextState).to.equal(fromJS(examples.serverInitial))
  })
})

describe('actions', () => {
  let setState = actions.setState({foo: 'bar'})
  let randomAnswer = actions.chooseAnswer({playerId: NaN, questionId: 5, answer: 'wakawaka'})
  // let correctAnswer = actions.chooseAnswer({playerId: NaN, questionId: 5, answer: 'me drum'})
  // let judgeAnswers = actions.judgeAnswers({questionId: 5, answer: 'ribbit'})

  describe('setState', () => {
    it('should merge the new state with the old', () => {
      const action = setState
      const nextState = reducer(undefined, action)

      expect(nextState.get('foo')).to.equal('bar')
    })
  })

  describe('chooseAnswer', () => {
    it('should add the {questionId, choice} to the list of pending answers', () => {
      const action = randomAnswer
      const nextState = reducer(undefined, action)

      const pendingAnswer = nextState.get('round').get('pendingAnswers').get(0)

      expect(pendingAnswer).to.equal(fromJS({
        questionId: randomAnswer.questionId,
        answer: randomAnswer.answer,
        playerId: randomAnswer.playerId
      }))
    })
  })

  describe('judgeAnswers', () => {
    it('should update history')
    it('should update scores of players')
  })
})
