let question = {
  id: NaN,
  text: 'What company made React?',
  choices: [
    'AirBnb',
    'Google',
    'Citibank',
    'Facebook'
  ]
}

let questionEvents = {
  onAnswerChosen: (e, choice) => {console.log(`chose: ${choice}`)}
}

let playerAnswerMeta = {
  receivedAt: null, // new Date('2014-12-10 14:44:00 GMT-0600')
  isFirst: null,
  isCorrect: null,
  correctAnswer: ''
}

let player = {
  id: NaN,
  name: ''
}

let questionProps = Object.assign({},
  question,
  {playerAnswer: ''},
  playerAnswerMeta,
  questionEvents
)


export default {
  shared: {
    player: player,
  },
  client: {
    question: question,
    playerAnswer: '',
    playerAnswerMeta: playerAnswerMeta,
    questionProps: questionProps,
    snapshot: {
      unanswered: {
        question: question
      },
      pending: {
        question: question,
        playerAnswer: 'React',
        player
      }
    }
  },
  server: {

  }
}
