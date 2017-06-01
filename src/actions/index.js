
export const addQuestions = (questions) => {
  return {
    type: 'ADD_QUESTIONS',
    questions
  }
}

export const addQuizQuestion = (quizObj) => {
  return {
    type: 'ADD_Q_QUESTION',
    quizObj
  }
}

export const fetchQuestions = () => {
  return dispatch => {
    return fetch('/quizzes')
      .then(resp => resp.json())
      .then(obj => dispatch(addQuestions(obj)))
      .catch(error => console.log(error))
  }
}
