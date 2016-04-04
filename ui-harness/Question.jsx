import React from 'react';
import Question from '../src/components/Question';


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
    playerChoice: 'AirBnb'
  }

  before(() => {
    this.component( <Question {...question} /> )
  })

  section('voting', () => {
    it('unvoted', () => this.props({ choiceState: '' }))
    it('voted, not confirmed', () => this.props({ choiceState: 'pending' }))
    it('voted, confirmed', () => this.props({ choiceState: 'confirmed' }))
  })
})
