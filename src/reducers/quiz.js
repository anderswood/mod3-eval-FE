
const quiz = (state=[], action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS':
      return action.questions.quizzes

    case 'ADD_Q_QUESTION':
      return action.quizObj

    default:
      return state;
  }
}

export default quiz
