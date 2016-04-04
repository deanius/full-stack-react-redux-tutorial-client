import React from 'react'

var styles = {
  pending: {
    border: '2px dashed black',
  },
  confirmed: {
    border: '2px solid black'
  }
}

// pending, confirmed, or undefined
const styleFor = ({playerChoice, choice, choiceState}) => {
  return playerChoice === choice ? styles[choiceState] : {}
}

export default ({text, choices, playerChoice, choiceState}) => (
  <div className="question">
    <div className="prompt">{text}</div>
      {choices.map(choice =>
        <button key={choice} style={styleFor({playerChoice, choice, choiceState})}>
          <h1>{choice}</h1>
        </button>
      )}
  </div>)

