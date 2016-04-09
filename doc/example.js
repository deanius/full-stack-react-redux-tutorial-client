// client, server
export let player = {
  id: NaN,
  name: ""
}

// server
export let question = {
  id: NaN,
  text: "",
  choices: [], //strings
  correctAnswer: "" //string
}

// client
export let clientQuestion = {
  id: NaN,
  text: "",
  choices: [] //strings
}

// client
export let playerAnswer = {
  playerId: NaN,
  questionId: NaN,
  answer: ""
}

// server
export let recordedPlayerAnswer = {
  playerId: NaN,
  // questionId is contextual
  answer: "",
  timestamp: new Date("2014-12-10 14:40:00 GMT-0600")
}

export let round = {
  currentQuestionId: NaN,
  pendingAnswers: [] // [playerAnswer|recordedPlayerAnswer]
}

export let questionHistory = [
  {
    questionId: NaN,
    correctPlayerId: NaN,
    answerHistory: [] // [recordedPlayerAnswer]
  }
]

export let serverInitial = {
  game: {
    players: [],   // [player]
    questions: [], // [question]
    scores: {}     // {playerId: int}
  },
  round: {
    currentQuestionId: NaN,
    pendingAnswers: [] // [playerAnswer|recordedPlayerAnswer]
  },
  questionHistory: [] // [questionHistory]
}


export let serverSnapshot = {
  game: {
    players: [
      {
        id: 1,
        name: "Mark"
      },
      {
        id: 2,
        name: "Sergey"
      }
    ],
    questions: [
      {
        id: 1,
        text: "What company made React?",
        choices: [
          "AirBnb",
          "Google",
          "Citibank",
          "Facebook"
        ],
        correctAnswer: "Facebook"
      },
      {
        id: 2,
        text: "What company made Angular?",
        choices: [
          "AirBnb",
          "Google",
          "Citibank",
          "Facebook"
        ],
        correctAnswer: "Google"
      }
    ],
    scores: {
      1: 1,
      2: 0
    }
  },
  round: {
    currentQuestionId: 2,
    pendingAnswers: [
      {
        playerId: 2,
        answer: "Google",
        timestamp: "2014-12-10 14:46:00 GMT-0600" // assigned by server when it arrives
      }
    ]
  },
  questionHistory: [
    {
      questionId: 1,
      correctPlayerId: 1,
      answers: [
        {
          playerId: 2,
          answer: "Google",
          timestamp: "2014-12-10 14:44:00 GMT-0600"
        },
        {
          playerId: 1,
          answer: "Facebook",
          timestamp: "2014-12-10 14:44:10 GMT-0600"
        }
      ]
    }
  ]
}
