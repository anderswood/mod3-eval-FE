import * as actions from '../actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Quiz from '../components/Quiz/Quiz'

const mapStateToProps = (state) => {
  return { quizObj: state.quiz }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetQuiz: () => dispatch(actions.fetchQuestions),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
