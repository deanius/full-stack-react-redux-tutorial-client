import {questionStatus} from '../../doc/example'

export function getAnswerStatus(playerId) {
  let state = this
  let answers = state.get('round').get('answers')
  let playerAnswer = answers.filter(a => a.playerId === playerId)
  if (!playerAnswer) return questionStatus.NEW
  if (!playerAnswer.timestamp) return questionStatus.PENDING
  return null
}
