import React from 'react';

export default ({correctCount}) => {

    return (
        <div className='resultsWrapper'>
            <p>You scored {correctCount} out of 10</p>
        </div>
    )

}