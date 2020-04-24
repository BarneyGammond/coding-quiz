import React, {useState} from 'react';

export default ({text, answer, response, handleClicked}) => {

    let [className, setClassName] = useState('answerBody')

    const handleClick = () => {

        if (!response) {
            setClassName(className += answer ? ' correct' : ' incorrect');
            handleClicked();
            setTimeout(()=> {setClassName('answerBody')},1500)
        }

    }

    return (

        <div onClick={handleClick} className={className}>
            <div className="answerPoint"></div>
            <h3 className="answerText">{text}</h3>
        </div>

    )

}