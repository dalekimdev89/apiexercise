import React from 'react';

const TestComp = () => {

    var x = '';
    
    fetch('https://swapi.dev/api/people/')
    .then(resp => resp.json())
    .then(data => x = data.count)

    console.log(x)

    return (
        <h1>
            hello {x}
        </h1>
    );
}

export default TestComp;