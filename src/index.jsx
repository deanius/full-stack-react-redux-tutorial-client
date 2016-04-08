import React from 'react'
import ReactDOM from 'react-dom'
import Question from './components/Question'

const question = {
  text: 'What company made React?',
  choices: [
    'AirBnb',
    'Google',
    'Citibank',
    'Facebook'
  ],
  playerChoice: 'AirBnb',
  answerState: null,
  onAnswerChosen: (e, choice) => console.log('TODO implement: ', choice)
}

ReactDOM.render(
  <Question {...question} />,
  document.getElementById('app')
)
