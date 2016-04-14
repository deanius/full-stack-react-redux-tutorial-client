let player = {
  name: 'Mark'
}

let questionPosed = {
  text: 'What company made React?',
  choices: [
    'AirBnb',
    'Google',
    'Citibank',
    'Facebook'
  ]
}

let answerStates = {
  unanswered: {
    playerAnswer: null,
    receivedAt: null,
    isFirst: null,
    isCorrect: null
  },
  pending: {
    playerAnswer: 'Facebook',
    receivedAt: null,
    isFirst: null,
    isCorrect: null
  },
  received: {
    playerAnswer: 'Facebook',
    receivedAt: new Date('2014-12-10 14:44:00 GMT-0600'),
    isFirst: true,
    isCorrect: null
  },
  beaten: {
    playerAnswer: 'Facebook',
    receivedAt: new Date('2014-12-10 14:44:00 GMT-0600'),
    isFirst: false,
    isCorrect: null
  },
  correct: {
    playerAnswer: 'Facebook',
    receivedAt: new Date('2014-12-10 14:44:00 GMT-0600'),
    isFirst: true,
    isCorrect: true
  },
  incorrect: {
    playerAnswer: 'AirBnb',
    receivedAt: new Date('2014-12-10 14:44:00 GMT-0600'),
    isFirst: true,
    isCorrect: false
  }
};

let questionEvents = {
  onAnswerChosen: (e, choice) => {console.log(`chose: ${choice}`)}
}

let questionProps = Object.assign({},
  questionPosed,
  answerStates.unanswered,
  questionEvents
)

export default {
  client: {
    answers: answerStates,
    questionProps: questionProps,
  },
  server: {

  }
}
