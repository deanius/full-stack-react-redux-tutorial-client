/*global section*/

import React from 'react'
import Question from '../src/components/Question'
import example from '../doc/example'

describe('Question', function() {
  this.header('## Question Styles')

  const questionProps = example.client.questionProps

  before(() => {
    this.component(<Question {...questionProps} />)
  })

  section('voting', () => {
    it('unvoted', () => {})

    it('voted, pending', () => {
      this.props({
        playerAnswer: 'Facebook'
      })
    })
    it('voted, confirmed', () => {
      this.props({
        playerAnswer: 'Facebook',
        receivedAt: new Date('2012-01-01'),
        isFirst: true
      })
    })
    it('voted, beaten', () => {
      this.props({
        playerAnswer: 'Facebook',
        receivedAt: new Date('2012-01-01'),
        isFirst: false
      })
    })
  })

  section('judging', () => {
    it('correct', () => this.props({answerState: 'correct'}))
    it('incorrect', () => this.props({answerState: 'incorrect'}))
  })
})
