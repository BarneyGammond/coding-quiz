const loadQuestions = (state, action) => {
    
    return {
        ...state,
        questionsLoaded: true,
        questions: action.questions,
    }
    
}

const incrementQNumber = (state, action) => {

    return action.answer ? {
        ...state,
        correctCount: state.correctCount += 1
    } : {
        ...state,
    }
    
}

export default (state, action) => { 
    switch (action.type) { 
        case "QUESTIONS_LOADED": return loadQuestions(state, action)
        case "Q_ANSWERED": return incrementQNumber(state, action)
        default: return state; 
    } 
};