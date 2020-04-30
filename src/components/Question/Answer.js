import React, {useState} from 'react';

export default ({text, answer, response, handleClicked}) => {

    let [className, setClassName] = useState('answerBody')

    if (response) {
        console.log(answer)
    }

    const handleClick = () => {

        if (!response) {
            setClassName(className += answer ? ' correct' : ' incorrect');
            handleClicked(answer);
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