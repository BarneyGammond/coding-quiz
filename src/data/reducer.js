const incrementQNumber = state => {
    return {
        ...state,
        questionNumber: state.questionNumber += 1
    }
}

export default (state, action) => { 
    switch (action.type) { 
        case "Q_ANSWERED": return incrementQNumber(state)
        default: return state; 
    } 
};