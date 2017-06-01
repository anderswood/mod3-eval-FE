import React, { Component } from 'react'

export class CreateQuestion extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      answer1: '',
      score1: '',
      answer2: '',
      score2: ''
    }
  }

  clickFunction () {

    //fetch call, post to
    // /quizzes/:quizId/questions
    const { title, answer1, score1, answer2, score2 } = this.state

    console.log(this.props);
    fetch(`/quizzes/${this.props.quiz[0].id}/questions`, {
      method: 'POST',
      body: JSON.stringify({
        title: title, answers: [
          {title: answer1, score: score1},
          {title: answer2, score: score2}
        ],
      }),
      headers: {'Content-Type':'application/json'}
    })
      .then(response => response.json())
      .then(jresponse => this.props.handleAddQuestion(jresponse))

    this.setState({
      title: '',
      answer1: '',
      score1: '',
      answer2: '',
      score2: ''
    })
  }

  handleChange (e, label) {
    this.setState({[label]: e.target.value})
  }

  render() {
    return(
      <div>
        <input value={ this.state.title } onChange={ (e) => this.handleChange(e, 'title') } />
        <input value={ this.state.answer1 } onChange={ (e) => this.handleChange(e, 'answer1') } />
        <input value={ this.state.score1 } onChange={ (e) => this.handleChange(e, 'score1') } />
        <input value={ this.state.answer2 } onChange={ (e) => this.handleChange(e, 'answer2') } />
        <input value={ this.state.score2 } onChange={ (e) => this.handleChange(e, 'score2') } />
        <button onClick={ () => this.clickFunction() }>Click Function</button>
      </div>
    )
  }



}
