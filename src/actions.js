import axios from './axios'

const loadedQuiz = (data) => {
    return {
        type: 'QUESTIONS_LOADED',
        questions: data
    }
}

export const getQuiz = () => {
    return (dispatch) => {
        axios.get('').then(({data}) => {
            dispatch(loadedQuiz(data.results))
        });
    };
};