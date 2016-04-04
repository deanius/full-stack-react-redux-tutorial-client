import React from 'react'

let answerStyles = {
  pending: {
    border: '2px dashed black',
  },
  final: {
    border: '2px solid black',
  }
}

let disabledStyles = {
  pointerEvents: 'none',
  cursor: 'pointer'
}

const choiceStyleFor = ({playerChoice, choice, answerState}) => {
  if (playerChoice !== choice) { return {} }

  if (answerState === 'pending') {
    return answerStyles.pending
  } else if (['confirmed', 'correct', 'incorrect'].includes(answerState)) {
    return answerStyles.final
  }

  return {}
}

const questionStyleFor = ({answerState}) => {
  if (!answerState) return {}

  return Object.assign({}, disabledStyles,
    (answerState === 'correct' && {backgroundColor: 'green'}) ||
    (answerState === 'incorrect' && {backgroundColor: 'red'}) ||
    {}
  )
}

function statusText(answerState) {
  switch (answerState) {
    case 'pending':
      return <div style={{color: 'blue'}}>Sending to server...</div>
    case 'confirmed':
      return <div style={{color: 'green'}}>Answer received, waiting...</div>
    case 'beaten':
      return <div style={{color: 'red'}}>You were not the first to answer!</div>
    case 'correct':
      return <div style={{color: 'white'}}>You are correct!</div>
    case 'incorrect':
      return <div style={{color: 'white'}}>That was not correct...</div>
    default:
      return null
  }
}

const Question = ({text, choices, playerChoice, answerState}) => (
  <div className="question" style={questionStyleFor({answerState})}>
    <div className="prompt">{text}</div>
    {statusText(answerState)}
    <div>
      {choices.map(choice =>
        <button key={choice} style={choiceStyleFor({playerChoice, choice, answerState})}>
          <h1>{choice}</h1>
        </button>
      )}
      </div>

  </div>
)

Question.propTypes = {
  text: React.PropTypes.string,
  choices: React.PropTypes.array,
  playerChoice: React.PropTypes.string,
  answerState: React.PropTypes.string
}

export default Question
