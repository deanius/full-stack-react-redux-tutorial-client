import React from 'react'
import {assign} from 'lodash'

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

function displayStyle(choice, {playerAnswer, receivedAt, isFirst, isCorrect}) {
  if (!playerAnswer) {
    return {}
  }

  if (choice !== playerAnswer) {
    return disabledStyles
  }

  if (!receivedAt) {
    return assign({}, answerStyles.pending, disabledStyles)
  } else {
    return assign({}, answerStyles.final, disabledStyles)
  }
}

const Question = (props) => {
  let {text, choices, playerAnswer, onAnswerChosen} = props
  return (
    <div className="question">
      <div className="prompt">{text}</div>
      <div>
        {choices.map(choice =>
          <button key={choice}
            className="choice"
            style={displayStyle(choice, props)}
            onClick={(e) => !playerAnswer && onAnswerChosen(e, choice)}
          >
            <h1>{choice}</h1>
          </button>
        )}
      </div>
    </div>
  )
}

Question.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string.isRequired,
  choices: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  playerAnswer: React.PropTypes.string,
  receivedAt: React.PropTypes.instanceOf(Date),
  isFirst: React.PropTypes.bool,
  isCorrect: React.PropTypes.bool,
  correctAnswer: React.PropTypes.string,
  onAnswerChosen: React.PropTypes.func
}

export default Question
