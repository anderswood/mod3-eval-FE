import React from 'react';

import QuizCard from '../QuizCard/QuizCard'

const Quiz = (props) => {

  if (!props.quizObj[0]) {
    return (<div></div>)
  }

  let quizArr = props.quizObj[0].questions.map((cardObj, i) => {
    return <QuizCard  key={ i }
                      cardData={ cardObj }/>
  })

  return (
    <div className='Quiz '>
      <h1>{ props.quizObj[0].title }</h1>
      <h3>{ quizArr }</h3>
      <input type='submit'/>
    </div>
  )

};

export default Quiz;
