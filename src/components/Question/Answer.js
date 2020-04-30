import React, {useState} from 'react';
import he from 'he'

export default ({text, answer, response, handleClicked, finalQ}) => {

    let [className, setClassName] = useState('answerBody')

    if (answer && response && className === 'answerBody') {
        setClassName('answerBody displayCorrect')
        if (!finalQ) {setTimeout(()=> {setClassName('answerBody')},1500)}
    }

    const handleClick = () => {
        
        if (!response) {
            setClassName(className += answer ? ' correct' : ' incorrect');
            handleClicked(answer);
            if (!finalQ) {setTimeout(()=> {setClassName('answerBody')},1500)}
        }

    }

    return (

        <div onClick={handleClick} className={className}>
            <div className="answerPoint"></div>
            <h3 className="answerText">{he.decode(text)}</h3>
        </div>

    )

}