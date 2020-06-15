import React from 'react';

const Output = ({prop}) => {
    return(
        <div>
            <h2>OUTPUT</h2>
            <body>
                My name is {prop.people}.<br></br>
                My height is 172.<br></br>
                Mass is 77.<br></br>
                I came out in these films.
            </body>
        </div>
    );
}

export default Output;