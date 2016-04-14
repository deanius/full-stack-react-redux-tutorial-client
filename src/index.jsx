import React from 'react'
import ReactDOM from 'react-dom'
import Question from './components/Question'
import examples from '../doc/examples'

const questionProps = examples.client.questionProps

ReactDOM.render(
  <Question {...questionProps} />,
  document.getElementById('app')
)
