import React, {useReducer} from 'react';
import Answer from './Answer';
import reducer from '../../data/questionState/reducer'

const initial = {
    questionNumber: 0,
}

export default ({questions,handleAnswer}) => {

    const [state,dispatch] = useReducer(reducer,initial);

    let setFirstQuestion = () => {
        console.log('hiya')
        console.log(questions[state.questionNumber])
        dispatch({
            type: 'NEXT_QUESTION',
            question: questions[state.questionNumber]
        })
    }

    let handleClicked = () => console.log('clicked')

    console.log(state)

    return !state.questionNumber ? setFirstQuestion() : (

        <div className="questionWrapperFrame">
            <div className='questionBody'>
                <h3 className='question'>{state.question}</h3>
                { state.answerList.map((content,i) => (

                    <Answer 
                        key={i}
                        text={content} 
                        answer={content===state.answer} 
                        handleClicked={handleClicked}
                    />
                    
                ))}
            </div>
        </div>

    )

}