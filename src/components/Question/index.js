import {connect} from 'react-redux';
import Question from './Question'

const mapStateToProps = ({questionNumber,questions}) => {
    return {
        questionNumber,
        questions
    }
}

const mapDispatchToProps = dispatch => {

    return {
        handleAnswer: (answer) => dispatch({type: 'Q_ANSWERED', answer})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Question)