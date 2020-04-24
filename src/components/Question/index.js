import {connect} from 'react-redux';
import Question from './Question'

const mapStateToProps = ({questionNumber}) => {
    return {
        questionNumber
    }
}

const mapDispatchToProps = dispatch => {

    return {
        handleAnswer: () => dispatch({type: 'Q_ANSWERED'})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Question)