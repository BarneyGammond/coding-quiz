import React, {useState} from 'react';
import Answer from './Answer';
import questions from '../../data/questionSet1'
import history from '../../history'

export default ({questionNumber,handleAnswer}) => {

    let {question,answer,false1,false2,false3} = questionNumber < questions.length ? 
        questions[questionNumber - 1] : 
        questions[questionNumber - 2]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array
    }

    const [questionClasses,setQuestionClasses] = useState('questionWrapper show')
    const [questionText,setQuestionText] = useState(question)
    const [answerList,setAnswerList] = useState(shuffleArray([answer,false1,false2,false3]))
    const [answered,setAnswered] = useState(false);

    const handleClicked = (answer) => {
        setAnswered(true);
        handleAnswer(answer);
        setTimeout(() => {
            setQuestionClasses('questionWrapper');
        },500)
        setTimeout(() => {
            setQuestionClasses('questionWrapper show')
            questionNumber >= questions.length ? history.push('/results') : reset();
        },1500);
    }

    const reset = () => {
        let {question,answer,false1,false2,false3} = questions[questionNumber];
        setQuestionText(question);
        setAnswerList(shuffleArray([answer,false1,false2,false3]));
        setAnswered(false);
    }

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