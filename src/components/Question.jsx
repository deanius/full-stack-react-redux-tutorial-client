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
  if(playerChoice !== choice || !answerState)
    return {}
  else if (answerState == 'pending')
    return answerStyles['pending']
  else if (['confirmed', 'correct', 'incorrect'])
    return answerStyles['final']
}

const questionStyleFor = ({answerState}) => {
  if(!answerState) return {}

  return Object.assign({}, disabledStyles,
    answerState == 'correct' ?
    {backgroundColor: 'green'} :
      answerState == 'incorrect' ?
      {backgroundColor: 'red'} :
      {}
  )
}

export default ({text, choices, playerChoice, answerState}) => (
  <div className="question" style={questionStyleFor({answerState})}>
    <div className="prompt">{text}</div>
    {answerState === 'pending' && <div style={{color: 'blue'}}>Sending to server...</div>}
    {answerState === 'confirmed' && <div style={{color: 'green'}}>Answer received, waiting...</div>}
    {answerState === 'beaten' && <div style={{color: 'red'}}>You were not the first to answer!</div>}
    {answerState === 'correct' && <div style={{color: 'white'}}>You are correct!</div>}
    {answerState === 'incorrect' && <div style={{color: 'white'}}>That was not correct...</div>}
    <div>
      {choices.map(choice =>
        <button key={choice} style={choiceStyleFor({playerChoice, choice, answerState})}>
          <h1>{choice}</h1>
        </button>
      )}
      </div>

  </div>)

