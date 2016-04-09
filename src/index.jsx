import React from 'react'
import ReactDOM from 'react-dom'
import Question from './components/Question'
import {questionProps} from '../doc/example'

const question = Object.assign({}, questionProps, {
  onAnswerChosen: (e, choice) => console.log('TODO implement: ', choice)
})

ReactDOM.render(
  <Question {...question} />,
  document.getElementById('app')
)
