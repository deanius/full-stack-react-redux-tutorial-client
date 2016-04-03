import React from 'react'

require('./question.css')

// pending, confirmed, or undefined
const styleFor = ({playerChoice, choice, choiceState}) => {
  return playerChoice === choice ? choiceState : ''
}

export default ({text, choices, playerChoice, choiceState}) => (
  <div className="question">
    <div className="prompt">{text}</div>
      {choices.map(choice =>
        <button key={choice} className={styleFor({playerChoice, choice, choiceState})}>
          <h1>{choice}</h1>
        </button>
      )}
  </div>)

