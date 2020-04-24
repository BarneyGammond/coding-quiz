import React, {useState} from 'react';

export default ({text, answer, response, handleAnswer}) => {

    let [className, setClassName] = useState('answerBody')

    const handleClick = () => {

        if (!response) {
            setClassName(className += answer ? ' correct' : ' incorrect');
            handleAnswer();
        }

    }

    return (

        <div onClick={handleClick} className={className}>
            <div className="answerPoint"></div>
            <h3 className="answerText">{text}</h3>
        </div>

    )

}