import React from 'react';

const Dropdown = ({dropChange}) => {
    return (
        <div>
            <h2>DROPDOWN</h2>
            <select onChange={ dropChange }>
               <option value="https://swapi.dev/api/people/?page=1">Page1</option>
               <option value="https://swapi.dev/api/people/?page=2">Page2</option>
               <option value="https://swapi.dev/api/people/?page=3">Page3</option>
               <option value="https://swapi.dev/api/people/?page=4">Page4</option>
            </select>
        </div>
    )
}

export default Dropdown;