import React, {useReducer, useState} from 'react';
import Answer from './Answer';
import reducer from '../../data/questionState/reducer'
import he from 'he'

const initial = {
    questionNumber: 0,
}

export default ({questions,handleAnswer}) => {

    const [state,dispatch] = useReducer(reducer,initial);

    const [className,setClassName] = useState('questionWrapper show');
    const [answered,setAnswered] = useState(false)

    let setFirstQuestion = () => {
        console.log(questions[state.questionNumber])
        dispatch({
            type: 'NEXT_QUESTION',
            question: questions[state.questionNumber],
        })
    }

    let finalQ = state.questionNumber > questions.length - 1;

    let handleClicked = (answer) => {
        setAnswered(true)
        setTimeout(() => {
            setClassName('questionWrapper')
        }, 500)
        setTimeout(() => {
            handleAnswer(answer, finalQ)
            if (!finalQ) {
                setClassName('questionWrapper show')
                setAnswered(false)
                dispatch({
                    type: 'NEXT_QUESTION',
                    question: questions[state.questionNumber]
                })
            }
        }, 1500)
        
    }

    return !state.questionNumber ? setFirstQuestion() : (

        <div className="questionWrapperFrame">
            <div className={className}>
                <h3 className='question'>{he.decode(state.question)}</h3>
                { state.answerList.map((content,i) => (

                    <Answer 
                        finalQ={finalQ}
                        key={i}
                        text={content} 
                        response={answered}
                        answer={content===state.answer} 
                        handleClicked={handleClicked}
                    />
                    
                ))}
            </div>
        </div>

    )

}