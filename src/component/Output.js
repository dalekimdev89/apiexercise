import React from 'react';

const Output = ( { name, height, mass, films } ) => {
    // console.log('inp', name, height, mass);
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                My name is {name}.<br></br>
                My height is {height}.<br></br>
                Mass is {mass}.<br></br>
        </div>
    );
}

export default Output;