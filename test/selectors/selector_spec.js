import {fromJS} from 'immutable'
import * as examples from '../../doc/example'
import * as selectors from '../../src/selectors/index'

describe('Selectors', () => {
  describe('getAnswerStatus', () => {
    let stateWithAnsweredQuestion = fromJS(examples.serverSnapshot)
    it('exists', () => {
      expect(stateWithAnsweredQuestion).to.exist
      expect(selectors.getAnswerStatus).be.an.instanceof(Function)
    })
    it('pending - a player has an untimestamped answer')
  })
})
