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
      return <span style={{color: 'blue'}}>Sending to server...</span>
    case 'confirmed':
      return <span style={{color: 'green'}}>Answer received, waiting...</span>
    case 'beaten':
      return <span style={{color: 'red'}}>You were not the first to answer!</span>
    case 'correct':
      return <span style={{color: 'white'}}>You are correct!</span>
    case 'incorrect':
      return <span style={{color: 'white'}}>That was not correct...</span>
    default:
      return null
  }
}

const Question = ({text, choices, playerChoice, answerState, onAnswerChosen}) => (
  <div className="question" style={questionStyleFor({answerState})}>
    <div className="prompt">{text}</div>
    <div id="answerStatus" data={{answerState}}>{statusText(answerState)}</div>
    <div>
      {choices.map(choice =>
        <button key={choice} className="choice"
          onClick={(e) => onAnswerChosen(e, choice)}
          style={choiceStyleFor({playerChoice, choice, answerState})}
        >
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
  answerState: React.PropTypes.string,
  onAnswerChosen: React.PropTypes.func
}

export default Question
