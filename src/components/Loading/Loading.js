import React, {useEffect} from 'react';

export default ({children, questionsLoaded, handleLoad}) => {

    useEffect(() => {
        if (!questionsLoaded) {
            handleLoad();
        }
    })

    return questionsLoaded ? children : (

        <div></div>

    )

}