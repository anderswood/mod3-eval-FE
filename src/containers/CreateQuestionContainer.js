import * as actions from '../actions';
import { connect } from 'react-redux';
import {CreateQuestion} from '../components/CreateQuestion/CreateQuestion'

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddQuestion: (quizObj) => dispatch(actions.addQuizQuestion(quizObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)
