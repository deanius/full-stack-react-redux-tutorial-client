/*global section*/

import React from 'react'
import Question from '../src/components/Question'

describe('Question', function() {
  this.header('## Question Styles')

  const question = {
    text: 'What company made React?',
    choices: [
      'AirBnb',
      'Google',
      'Citibank',
      'Facebook'
    ],
    playerChoice: 'Facebook'
  }

  before(() => {
    this.component(<Question {...question} />)
  })

  section('voting', () => {
    it('unvoted', () => this.props({ answerState: null }))
    it('voted, pending', () => this.props({ answerState: 'pending' }))
    it('voted, confirmed', () => this.props({ answerState: 'confirmed' }))
    it('voted, beaten', () => this.props({ answerState: 'beaten' }))
  })

  section('judging', () => {
    it('correct', () => this.props({answerState: 'correct'}))
    it('incorrect', () => this.props({answerState: 'incorrect'}))
  })
})
