import React from 'react';

const Output = ({inp}) => {
    console.log('inp', inp);
    var x = 'hi'
    return(
        <div>
            <h2>OUTPUT</h2>
                My name is {x}<br></br>
                My height is 172.<br></br>
                Mass is 77.<br></br>
                I came out in these films.
        </div>
    );
}

export default Output;