import questions from './questionSet1'

const incrementQNumber = (state, action) => {

    let nextQuestionNumber = state.questionNumber < questions.length ?
        state.questionNumber += 1 :
        state.questionNumber

    return action.answer ? {
        ...state,
        questionNumber: nextQuestionNumber,
        correctCount: state.correctCount += 1
    } : {
        ...state,
        questionNumber: nextQuestionNumber
    }
    
}

export default (state, action) => { 
    switch (action.type) { 
        case "Q_ANSWERED": return incrementQNumber(state, action)
        default: return state; 
    } 
};