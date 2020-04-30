import React, {useState} from 'react';
import Answer from './Answer';
import history from '../../history'
import shuffleArray from '../functions/shuffle'

export default ({questionNumber,questions,handleAnswer}) => {

    let questionObject = questionNumber < questions.length ? 
        questions[questionNumber - 1] : 
        questions[questionNumber - 2]

    let {question} = questionObject;
    let answer = questionObject.correct_answer;
    let false1 = questionObject.incorrect_answers[0];
    let false2 = questionObject.incorrect_answers[1];
    let false3 = questionObject.incorrect_answers[2];

    const [questionClasses,setQuestionClasses] = useState('questionWrapper show')
    const [questionText,setQuestionText] = useState(question)
    const [answerList,setAnswerList] = useState(shuffleArray([answer,false1,false2,false3]))
    const [answered,setAnswered] = useState(false);

    const handleClicked = (answer) => {
        setAnswered(true);
        handleAnswer(answer);
        setTimeout(() => {
            setQuestionClasses('questionWrapper');
            setAnswered(false);
        },500)
        setTimeout(() => {
            setQuestionClasses('questionWrapper show')
            questionNumber >= questions.length ? history.push('/results') : reset();
        },1500);
    }

    const reset = () => {
        let questionObject = questions[questionNumber];
        let {question} = questionObject;
        let answer = questionObject.correct_answer;
        let false1 = questionObject.incorrect_answers[0];
        let false2 = questionObject.incorrect_answers[1];
        let false3 = questionObject.incorrect_answers[2];
        setQuestionText(question);
        setAnswerList(shuffleArray([answer,false1,false2,false3]));

    }

    console.log(answer);

    return (

        <div className="questionWrapperFrame">
            <div className={questionClasses}>
                <h3 className='question'>{questionText}</h3>
                { answerList.map((content,i) => (

                    <Answer 
                        key={i}
                        text={content} 
                        answer={content===answer} 
                        response={answered}
                        handleClicked={handleClicked}
                    />
                    
                ))}
            </div>
        </div>

    )

}