import React, {useState} from 'react';
import Answer from './Answer'

export default ({question,answer,false1,false2,false3}) => {

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array
    }

    const [answerList] = useState(shuffleArray([answer,false1,false2,false3]))
    const [answered,setAnswered] = useState(false);

    const handleAnswer = () => {
        setAnswered(true);
    }

    return (

        <div className='questionWrapper'>
            <h3 className='question'>{question}</h3>
            { answerList.map(content => (

                <Answer 
                    text={content} 
                    answer={content===answer} 
                    response={answered}
                    handleAnswer={handleAnswer}
                />

            ))}
        </div>

    )

}