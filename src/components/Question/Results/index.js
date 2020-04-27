import {connect} from 'react-redux'
import Results from './Results'

const mapStateToProps = ({correctCount}) => ({
    correctCount
})

export default connect(mapStateToProps)(Results);