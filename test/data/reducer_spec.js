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
      expect(pendingAnswer).to.have.property('questionId', 5)
      expect(pendingAnswer).to.have.property('answer', 'wakawaka')
    })
  })
})
