import React, {useState} from 'react';
import Answer from './Answer';
import questions from '../../data/questionSet1'

export default ({questionNumber,handleAnswer}) => {

    console.log('questionNumber at start of comp:' + questionNumber);

    let {question,answer,false1,false2,false3} = questions[questionNumber-1]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array
    }

    const [questionText,setQuestionText] = useState(question)
    const [answerList,setAnswerList] = useState(shuffleArray([answer,false1,false2,false3]))
    const [answered,setAnswered] = useState(false);

    const handleClicked = () => {
        setAnswered(true);
        handleAnswer();
        setTimeout(() => {
            reset();
        },1500);
    }

    const reset = () => {
        let {question,answer,false1,false2,false3} = questions[questionNumber];
        setQuestionText(question);
        setAnswerList(shuffleArray([answer,false1,false2,false3]));
        setAnswered(false);
    }

    return (

        <div className='questionWrapper'>
            <h3 className='question'>{questionText}</h3>
            { answerList.map(content => (

                <Answer 
                    text={content} 
                    answer={content===answer} 
                    response={answered}
                    handleClicked={handleClicked}
                />

            ))}
        </div>

    )

}