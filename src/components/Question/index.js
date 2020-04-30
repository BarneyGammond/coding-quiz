import {connect} from 'react-redux';
import Question from './Question'
import history from '../../history'

const mapStateToProps = ({questions}) => {
    return {
        questions
    }
}

const mapDispatchToProps = dispatch => {

    return {
        handleAnswer: (answer, finalQuestion) => {
            if (finalQuestion) {history.push('/results')}
            dispatch({type: 'Q_ANSWERED', answer})
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Question)