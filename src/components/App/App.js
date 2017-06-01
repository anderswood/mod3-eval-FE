import React, { Component } from 'react';
import './App.css';
import QuizContainer from '../../containers/QuizContainer'
import CreateQuestionContainer from '../../containers/CreateQuestionContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizContainer />
        <CreateQuestionContainer />
      </div>
    );
  }
}

export default App;
