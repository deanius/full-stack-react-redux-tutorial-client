import {fromJS} from 'immutable'
import * as examples from '../../doc/example'
import * as selectors from '../../src/selectors/index'

describe('Selectors', () => {
  describe('getAnswerStatus', () => {
    let subject = selectors.getAnswerStatus
    let state = fromJS(examples.clientSnapshotPending)
    let playerId = 1

    it('pending', () => {
      let status = subject.call(state, playerId)
      expect(status).to.equal('pending')
    })
  })
})
