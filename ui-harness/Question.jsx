/*global section*/

import React from 'react'
import Question from '../src/components/Question'
import examples from '../doc/examples'

describe('Question', () => {
  // this.header('## Question Styles')

  const questionProps = examples.client.questionProps

  before(() => {
    this.component(<Question {...questionProps} />)
  })

  section('answering', () => {
    it('unanswered', () => {
      this.props(examples.answers.unanswered)
    })
    it('answered, pending', () => {
      this.props(examples.answers.pending)
    })
    it('answered, received', () => {
      this.props(examples.answers.received)
    })
    it('voted, beaten', () => {
      this.props(examples.answers.beaten)
    })
  })

  section('judging', () => {
    it('correct', () => this.props(examples.answers.correct))
    it('incorrect', () => this.props(examples.answers.incorrect))
  })
})
