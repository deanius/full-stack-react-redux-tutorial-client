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
  describe('setState', () => {
    it('should merge the new state with the old', () => {
      const action = actions.setState({foo: 'bar'})
      const nextState = reducer(undefined, action)

      expect(nextState.has('foo')).to.be.ok // XXX would prefer expect(nextState).to.have.key('foo')
    })
  })

  describe('chooseAnswer', () => {
    it('should add the {questionId, choice} to the list of pending answers', () => {
      const action = actions.chooseAnswer({questionId: 5, answer: 'wakawaka'})
      const nextState = reducer(undefined, action)

      const pendingAnswer = nextState.get('round').get('pendingAnswers').get(0)

      expect(pendingAnswer.get('questionId')).to.equal(5)
      expect(pendingAnswer.get('answer')).to.equal('wakawaka')

      // below could be over-asserting as this test is not in control of playerId
      expect(pendingAnswer).to.equal(fromJS({
        questionId: 5,
        answer: 'wakawaka',
        playerId: NaN
      }))
    })
  })
})
