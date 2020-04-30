import shuffleArray from '../../components/functions/shuffle'

const incrementQuestionNum = (state) => {
    return {
        ...state,
        questionNumber: state.questionNumber + 1
    }
}

const addQuestion = (state,{question}) => {

    console.log(question)

    let answerList = shuffleArray([question.correct_answer,...question.incorrect_answers])

    return {
        ...state,
        question: question.question,
        answer: question.correct_answer,
        answerList,
    }
}

export default (state, action) => { 
    switch (action.type) { 
        case 'NEXT_QUESTION': return incrementQuestionNum(addQuestion(state,action))
        default: return state; 
    } 
};