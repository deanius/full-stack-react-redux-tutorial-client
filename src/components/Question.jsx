import React from 'react'

export default ({text, choices}) => (
  <div className="question">
    <div className="prompt">{text}</div>
      {choices.map(choice =>
        <button key={choice}>
          <h1>{choice}</h1>
        </button>
      )}
  </div>)

