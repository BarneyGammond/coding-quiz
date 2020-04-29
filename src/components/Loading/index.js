import { connect } from "react-redux"; 
import Loading from "./Loading";
import {getQuiz} from '../../actions'

const mapStateToProps = ({ questionsLoaded }) => (
    { questionsLoaded, }
);

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);