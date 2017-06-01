import React from 'react';

const QuizCard = ({cardData}) => {

  let parsedAnswers = cardData.answers.map((answerObj, i) => {
      return (<div  key={ i }
                    className='answer'>
              <input  onClick={(e) => console.log(e) }
                      type='radio'
                      value={ answerObj.score }
                      name={ cardData.id }/>{answerObj.title}
              </div>)
    })


  return (
    <div className='quiz-card'>
      <h3 className='question'>{ cardData.title }</h3>
        { parsedAnswers }
    </div>
  )

};

export default QuizCard;
